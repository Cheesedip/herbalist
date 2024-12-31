import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { PotionStrength, RecipeWithPlants } from '../../data/recipe/recipe';
import {
  addPlantsToRecipes,
  getRecipes,
} from '../../data/recipe/recipe.repository';
import { DisplayRecipesComponent } from '../display-recipes/display-recipes.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
} from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

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
  templateUrl: './concoction-catalog.component.html',
  styleUrl: './concoction-catalog.component.scss',
})
export class ConcoctionCatalogComponent {
  private allRecipes = addPlantsToRecipes(getRecipes());
  private searchTerm = signal('');

  protected selectedStrengths: WritableSignal<PotionStrength[]> = signal([]);
  protected potionStrengths = Object.values(PotionStrength);

  protected filteredRecipes = computed(() => {
    const searchTerm = this.searchTerm();
    const strengths = this.selectedStrengths();
    const lower = searchTerm.toLowerCase();
    return this.allRecipes.filter(
      (recipe) =>
        (strengths.length === 0 || strengths.includes(recipe.strength)) &&
        (recipe.name.toLowerCase().includes(lower) ||
          recipe.effect.toLowerCase().includes(lower) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.plant.name.toLowerCase().includes(lower)
          ))
    );
  });

  protected setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }

  protected onStrengthChange(strengths: PotionStrength[]) {
    this.selectedStrengths.set(strengths);
  }
}
