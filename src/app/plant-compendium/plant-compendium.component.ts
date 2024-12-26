import { Component, signal, WritableSignal } from '@angular/core';
import { Plant } from '../../data/plant/plant';
import { getPlants } from '../../data/plant/plant.repository';
import { DisplayPlantsComponent } from '../display-plants/display-plants.component';

@Component({
  selector: 'app-plant-compendium',
  imports: [DisplayPlantsComponent],
  templateUrl: './plant-compendium.component.html',
  styleUrl: './plant-compendium.component.scss',
})
export class PlantCompendiumComponent {
  protected plants: WritableSignal<Plant[]> = signal(getPlants());
}
