import { Component, computed, signal } from '@angular/core';
import { getPlants } from '../../data/plant/plant.repository';
import { DisplayPlantsComponent } from '../display-plants/display-plants.component';
import { SearchBarComponent } from '../ui-components/search-bar/search-bar.component';

@Component({
  selector: 'app-plant-compendium',
  imports: [DisplayPlantsComponent, SearchBarComponent],
  templateUrl: './plant-compendium.component.html',
  styleUrl: './plant-compendium.component.scss',
})
export class PlantCompendiumComponent {
  private allPlants = getPlants();
  private searchTerm = signal('');

  protected filteredPlants = computed(() => {
    const searchTerm = this.searchTerm();
    const lower = searchTerm.toLowerCase();
    return this.allPlants.filter(
      (plant) =>
        plant.name.toLowerCase().includes(lower) ||
        plant.appearance.toLowerCase().includes(lower)
    );
  });

  protected setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }
}
