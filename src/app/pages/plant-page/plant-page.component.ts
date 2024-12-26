import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPlantById, getPlants } from '../../../data/plant/plant.repository';
import { Plant } from '../../../data/plant/plant';
import { CommonModule, Location } from '@angular/common';
import { Recipe, RecipeWithPlants } from '../../../data/recipe/recipe';
import {
  addPlantsToRecipes,
  getRecipes,
} from '../../../data/recipe/recipe.repository';
import { DisplayRecipesComponent } from '../../display-recipes/display-recipes.component';
import { RecipeComponent } from '../../display-recipes/recipe/recipe.component';

@Component({
  selector: 'app-plant-page',
  imports: [CommonModule, DisplayRecipesComponent, RecipeComponent],
  templateUrl: './plant-page.component.html',
  styleUrl: './plant-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantPageComponent {
  protected plant: WritableSignal<Plant | undefined> = signal(undefined);
  protected recipes: WritableSignal<RecipeWithPlants[]> = signal([]);

  constructor(private route: ActivatedRoute, private location: Location) {
    const plantId = Number(this.route.snapshot.paramMap.get('plantId'));
    const plant = getPlantById(plantId);
    this.plant.set(plant);

    // Filter recipes that include this plant
    this.recipes.set(
      // TODO: make this reactive (computed)
      addPlantsToRecipes(
        getRecipes().filter((recipe) =>
          recipe.ingredients.some(
            (ingredient) => ingredient.plantId === plantId
          )
        )
      )
    );
  }

  goBack() {
    this.location.back();
  }
}
