import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { getPlants } from '../../../data/plant/plant.repository';
import { Plant } from '../../../data/plant/plant';
import { RecipeWithPlants } from '../../../data/recipe/recipe';
import {
  addPlantsToRecipes,
  getRecipes,
} from '../../../data/recipe/recipe.repository';
import { CommonModule } from '@angular/common';
import { DisplayPlantsComponent } from '../../display-plants/display-plants.component';
import { DisplayRecipesComponent } from '../../display-recipes/display-recipes.component';
import { GatherHerbsComponent } from '../../gather-herbs/gather-herbs.component';

enum TabType {
  GatherHerbs = 'Gather Herbs',
  BotanicalCompendium = 'Botanical Compendium',
  AlchemicalRecipes = 'Alchemical Recipes',
}

const ActiveTabKey = 'active_tab';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    DisplayPlantsComponent,
    GatherHerbsComponent,
    DisplayRecipesComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  protected TabType = TabType;
  protected tabs = Object.values(TabType);

  protected plants: WritableSignal<Plant[]> = signal(getPlants());
  protected recipesWithPlants: WritableSignal<RecipeWithPlants[]> = signal(
    addPlantsToRecipes(getRecipes())
  );

  protected activeTab = TabType.GatherHerbs;

  constructor() {
    const savedTab = sessionStorage.getItem(ActiveTabKey);
    this.activeTab = savedTab ? (savedTab as TabType) : TabType.GatherHerbs;
  }

  protected setActiveTab(tab: TabType) {
    this.activeTab = tab;
    sessionStorage.setItem(ActiveTabKey, tab);
  }
}
