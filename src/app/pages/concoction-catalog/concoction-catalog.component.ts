import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { PopulatedRecipe, PotionStrength } from '../../../data/recipe/recipe';
import { DisplayRecipesComponent } from '../../components/display-recipes/display-recipes.component';
import { SearchBarComponent } from '../../ui-components/search-bar/search-bar.component';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
} from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { RecipesStore } from '../../../data/recipe/recipes.store';
import { LocalStorageService } from '../../services/local-storage.service';

const LOCAL_STORAGE_PAGE_KEY = 'concoctionCatalogPageState';

@Component({
  selector: 'app-concoction-catalog',
  imports: [
    DisplayRecipesComponent,
    SearchBarComponent,
    NgSelectComponent,
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    FormsModule,
  ],
  providers: [
    {
      provide: LocalStorageService,
      useFactory: () => new LocalStorageService(LOCAL_STORAGE_PAGE_KEY),
    },
  ],
  templateUrl: './concoction-catalog.component.html',
  styleUrl: './concoction-catalog.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcoctionCatalogComponent {
  private recipesStore = inject(RecipesStore);
  private localStorageService = inject(LocalStorageService);
  private searchTerm = signal('');
  private recipes = computed(() =>
    this.recipesStore
      .recipes()
      .map(({ id }) => this.recipesStore.getRecipeByIdWithIngredients(id))
  ) as Signal<PopulatedRecipe[]>;

  protected selectedStrengths: WritableSignal<PotionStrength[]> = signal([]);
  protected potionStrengths = Object.values(PotionStrength);

  protected filteredRecipes = computed(() => {
    const recipes = this.recipes();
    const searchTerm = this.searchTerm();
    const strengths = this.selectedStrengths();
    const lower = searchTerm.toLowerCase();
    return recipes
      .filter(
        (recipe) =>
          (strengths.length === 0 || strengths.includes(recipe.strength)) &&
          (recipe.name.toLowerCase().includes(lower) ||
            recipe.effect.toLowerCase().includes(lower) ||
            recipe.ingredients.some((ingredient) =>
              ingredient.name.toLowerCase().includes(lower)
            ))
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  constructor() {
    this.setInitialFilterSate();
  }

  protected setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }

  protected onStrengthChange(strengths: PotionStrength[]) {
    this.selectedStrengths.set(strengths);
    this.localStorageService.set('strengths', JSON.stringify(strengths));
  }

  private setInitialFilterSate() {
    const strengths = this.localStorageService.get('strengths');
    if (strengths) {
      this.selectedStrengths.set(JSON.parse(strengths));
    }
  }
}
