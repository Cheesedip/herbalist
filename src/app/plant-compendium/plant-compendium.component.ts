import { Component, computed, signal } from '@angular/core';
import { getPlants } from '../../data/plant/plant.repository';
import { DisplayPlantsComponent } from '../display-plants/display-plants.component';
import { SearchBarComponent } from '../ui-components/search-bar/search-bar.component';
import { Biome } from '../../data/plant/biome';
import { PlantRarity } from '../../data/plant/rarity';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-plant-compendium',
  imports: [DisplayPlantsComponent, SearchBarComponent, NgSelectComponent],
  templateUrl: './plant-compendium.component.html',
  styleUrl: './plant-compendium.component.scss',
})
export class PlantCompendiumComponent {
  private allPlants = getPlants();
  private searchTerm = signal('');

  public biomes = Object.values(Biome);
  public plantRarities = Object.values(PlantRarity);

  private selectedBiomes = signal<Biome[]>([]);
  private selectedRarities = signal<PlantRarity[]>([]);

  protected filteredPlants = computed(() => {
    const lower = this.searchTerm().toLowerCase();
    return this.allPlants
      .filter(
        (plant) =>
          (this.selectedBiomes().length === 0 ||
            this.selectedBiomes().includes(plant.biome)) &&
          (this.selectedRarities().length === 0 ||
            this.selectedRarities().includes(plant.rarity)) &&
          (plant.name.toLowerCase().includes(lower) ||
            plant.appearance.toLowerCase().includes(lower))
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  protected setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }

  protected onBiomeChange(biomes: Biome[]) {
    this.selectedBiomes.set(biomes);
  }

  protected onRarityChange(rarities: PlantRarity[]) {
    this.selectedRarities.set(rarities);
  }
}
