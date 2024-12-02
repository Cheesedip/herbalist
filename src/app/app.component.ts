import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { addPlants, getPlants } from '../data/plant/plant.repository';
import plants from '../data/plant/plants.json'; // Ensure the path to the JSON file is correct
import { CommonModule } from '@angular/common';
import { addIds } from './helpers';
import { Biome } from '../data/plant/biome';
import { Plant } from '../data/plant/plant';
import { DisplayPlantsComponent } from './display-plants/display-plants.component';
import { GatherHerbsComponent } from './gather-herbs/gather-herbs.component';

enum TabType {
  GatherHerbs = 'Gather Herbs',
  BotanicalCompendium = 'Botanical Compendium',
  AlchemicalRecipes = 'Alchemical Recipes',
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, DisplayPlantsComponent, GatherHerbsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected TabType = TabType;
  protected tabs = Object.values(TabType);

  protected allPlants: WritableSignal<Plant[]> = signal([]);

  protected activeTab = TabType.GatherHerbs;

  constructor() {
    // Add the plants to the store
    const plantsWithIds = addIds(plants) as Plant[];
    addPlants(plantsWithIds);

    // Get plants from the store
    this.allPlants.set(getPlants());
  }

  protected setActiveTab(tab: TabType) {
    this.activeTab = tab;
    console.log(this.activeTab);
  }
}
