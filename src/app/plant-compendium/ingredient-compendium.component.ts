import { Component, computed, inject, signal } from '@angular/core';
import { DisplayIngredientsComponent } from '../display-plants/display-ingredients.component';
import { SearchBarComponent } from '../ui-components/search-bar/search-bar.component';
import { Biome } from '../../data/ingredient/biome';
import { PlantRarity } from '../../data/ingredient/rarity';
import { NgSelectComponent } from '@ng-select/ng-select';
import { IngredientsStore } from '../../data/ingredient/ingredient.store';
import {
  BasicIngredient,
  IngredientType,
  isBasicIngredient,
  isPlant,
  Plant,
} from '../../data/ingredient/ingredient';

@Component({
  selector: 'app-ingredient-compendium',
  imports: [DisplayIngredientsComponent, SearchBarComponent, NgSelectComponent],
  templateUrl: './ingredient-compendium.component.html',
  styleUrl: './ingredient-compendium.component.scss',
})
export class IngredientCompendiumComponent {
  private ingredientsStore = inject(IngredientsStore);
  private ingredients = this.ingredientsStore.ingredients();
  private searchTerm = signal('');

  public biomes = Object.values(Biome);
  public plantRarities = Object.values(PlantRarity);
  public ingredientTypes = Object.values(IngredientType);

  private selectedBiomes = signal<Biome[]>([]);
  private selectedRarities = signal<PlantRarity[]>([]);
  private selectedIngredientTypes = signal<IngredientType[]>([]);

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
  }

  protected onRarityChange(rarities: PlantRarity[]) {
    this.selectedRarities.set(rarities);
  }

  protected onTypeChange(type: IngredientType[]) {
    this.selectedIngredientTypes.set(type);
  }
}
