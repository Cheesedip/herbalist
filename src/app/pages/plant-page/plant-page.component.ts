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
import { Recipe } from '../../../data/recipe/recipe';
import { getRecipes } from '../../../data/recipe/recipe.repository';
import { DisplayRecipesComponent } from '../../display-recipes/display-recipes.component';

@Component({
  selector: 'app-plant-page',
  imports: [CommonModule, DisplayRecipesComponent],
  templateUrl: './plant-page.component.html',
  styleUrl: './plant-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantPageComponent {
  protected plants: WritableSignal<Plant[]> = signal([]);
  protected plant: WritableSignal<Plant | undefined> = signal(undefined);
  protected recipes: WritableSignal<Recipe[]> = signal([]);
  protected filteredRecipes: WritableSignal<Recipe[]> = signal([]);

  constructor(private route: ActivatedRoute, private location: Location) {
    this.plants.set(getPlants());
    this.recipes.set(getRecipes());

    const plantId = Number(this.route.snapshot.paramMap.get('plantId'));
    const plant = getPlantById(plantId);
    this.plant.set(plant);

    // Filter recipes that include this plant
    this.filteredRecipes.set(
      // TODO: make this reactive (computed)
      this.recipes().filter((recipe) =>
        recipe.ingredients.some((ingredient) => ingredient.plantId === plantId)
      )
    );
  }

  goBack() {
    this.location.back();
  }
}
