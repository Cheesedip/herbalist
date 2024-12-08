import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { addPlants, getPlants } from '../data/plant/plant.repository';
import { CommonModule } from '@angular/common';
import { DisplayPlantsComponent } from './display-plants/display-plants.component';
import { GatherHerbsComponent } from './gather-herbs/gather-herbs.component';
import { Plant } from '../data/plant/plant';
import { addRecipes, getRecipes } from '../data/recipe/recipe.repository';
import { recipes } from '../data/recipe/recipes';
import { Recipe } from '../data/recipe/recipe';
import { DisplayRecipesComponent } from './display-recipes/display-recipes.component';
import { plants } from '../data/plant/plants';

enum TabType {
  GatherHerbs = 'Gather Herbs',
  BotanicalCompendium = 'Botanical Compendium',
  AlchemicalRecipes = 'Alchemical Recipes',
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    DisplayPlantsComponent,
    GatherHerbsComponent,
    DisplayRecipesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected TabType = TabType;
  protected tabs = Object.values(TabType);

  protected plants: WritableSignal<Plant[]> = signal([]);
  protected recipes: WritableSignal<Recipe[]> = signal([]);

  protected activeTab = TabType.GatherHerbs;

  constructor() {
    // Add all data to the store
    addPlants(plants);
    addRecipes(recipes);

    // Get data from the store
    this.plants.set(getPlants());
    this.recipes.set(getRecipes());
  }

  protected setActiveTab(tab: TabType) {
    this.activeTab = tab;
    console.log(this.activeTab);
  }
}
