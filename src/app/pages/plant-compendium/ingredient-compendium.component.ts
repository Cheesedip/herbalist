import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { DisplayIngredientsComponent } from '../../components/display-plants/display-ingredients.component';
import { SearchBarComponent } from '../../ui-components/search-bar/search-bar.component';
import { Biome } from '../../../data/ingredient/biome';
import { PlantRarity } from '../../../data/ingredient/rarity';
import { NgSelectComponent } from '@ng-select/ng-select';
import { IngredientsStore } from '../../../data/ingredient/ingredient.store';
import {
  BasicIngredient,
  IngredientType,
  isBasicIngredient,
  isPlant,
  Plant,
} from '../../../data/ingredient/ingredient';
import {
  PlantsSortByOptions,
  plantsSortFunctions,
} from '../../services/sorting/plants-sort-functions';
import { SortingService } from '../../services/sorting/sorting.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormsModule } from '@angular/forms';

const LOCAL_STORAGE_PAGE_KEY = 'ingredientCompendiumPageState';

@Component({
  selector: 'app-ingredient-compendium',
  imports: [
    DisplayIngredientsComponent,
    SearchBarComponent,
    NgSelectComponent,
    FormsModule,
  ],
  templateUrl: './ingredient-compendium.component.html',
  styleUrl: './ingredient-compendium.component.scss',
  providers: [
    {
      provide: SortingService,
      useFactory: () =>
        new SortingService<PlantsSortByOptions>(
          plantsSortFunctions,
          LOCAL_STORAGE_PAGE_KEY
        ),
    },
    {
      provide: LocalStorageService,
      useFactory: () => new LocalStorageService(LOCAL_STORAGE_PAGE_KEY),
    },
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientCompendiumComponent {
  protected sortingService = inject(SortingService);
  private localStorageService = inject(LocalStorageService);
  private ingredientsStore = inject(IngredientsStore);
  private ingredients = this.ingredientsStore.ingredients();
  private searchTerm = signal('');

  public biomes = Object.values(Biome);
  public plantRarities = Object.values(PlantRarity);
  public ingredientTypes = Object.values(IngredientType);

  protected selectedBiomes = signal<Biome[]>([]);
  protected selectedRarities = signal<PlantRarity[]>([]);
  protected selectedIngredientTypes = signal<IngredientType[]>([]);

  protected filteredIngredients = computed(() => {
    const lower = this.searchTerm().toLowerCase();
    const biomes = this.selectedBiomes();
    const rarities = this.selectedRarities();
    const selectedIngredientTypes = this.selectedIngredientTypes();
    return this.ingredients.filter((ingredient) => {
      if (
        selectedIngredientTypes.length !== 0 &&
        !selectedIngredientTypes.includes(ingredient.ingredientType)
      ) {
        return false;
      }
      if (isPlant(ingredient)) {
        return this.filterPlant(ingredient, biomes, rarities, lower);
      }
      if (isBasicIngredient(ingredient)) {
        return this.filterBasicIngredient(ingredient, biomes, rarities, lower);
      }
      return true;
    });
  });

  constructor() {
    this.setInitialFilterState();
  }

  private filterPlant(
    plant: Plant,
    biomes: Biome[],
    rarities: PlantRarity[],
    searchTerm: string
  ): boolean {
    return (
      (biomes.length === 0 || (plant.biome && biomes.includes(plant.biome))) &&
      (rarities.length === 0 || rarities.includes(plant.rarity)) &&
      (plant.name.toLowerCase().includes(searchTerm) ||
        plant.appearance.toLowerCase().includes(searchTerm))
    );
  }

  private filterBasicIngredient(
    ingredient: BasicIngredient,
    biomes: Biome[],
    rarities: PlantRarity[],
    searchTerm: string
  ): boolean {
    if (biomes.length !== 0 || rarities.length !== 0) {
      return false;
    }
    return (
      ingredient.name.toLowerCase().includes(searchTerm) ||
      ingredient.appearance.toLowerCase().includes(searchTerm)
    );
  }

  protected setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }

  protected onBiomeChange(biomes: Biome[]) {
    this.selectedBiomes.set(biomes);
    this.localStorageService.set('biomes', JSON.stringify(biomes));
  }

  protected onRarityChange(rarities: PlantRarity[]) {
    this.selectedRarities.set(rarities);
    this.localStorageService.set('rarities', JSON.stringify(rarities));
  }

  protected onTypeChange(type: IngredientType[]) {
    this.selectedIngredientTypes.set(type);
    this.localStorageService.set('types', JSON.stringify(type));
  }

  private setInitialFilterState() {
    const biomes = this.localStorageService.get('biomes');
    if (biomes !== null) {
      this.selectedBiomes.set(JSON.parse(biomes));
    }
    const rarities = this.localStorageService.get('rarities');
    if (rarities !== null) {
      this.selectedRarities.set(JSON.parse(rarities));
    }
    const types = this.localStorageService.get('types');
    if (types !== null) {
      this.selectedIngredientTypes.set(JSON.parse(types));
    }
  }
}
