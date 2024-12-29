import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { addPlants } from '../data/plant/plant.repository';
import { plants } from '../data/plant/plants';
import { addRecipes } from '../data/recipe/recipe.repository';
import { Recipe } from '../data/recipe/recipe';
import { Plant } from '../data/plant/plant';
import { PlantsFirebaseService } from './firebase.service';
import { recipes } from '../data/recipe/recipes';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private plantsService = inject(PlantsFirebaseService);

  constructor() {
    const plantsWithImageUrl = this.addImageUrlsToPlants(plants);
    const recipesWithImageUrl = this.addImageUrlsToRecipes(recipes);

    // Add all data to the store
    addPlants(plantsWithImageUrl);
    addRecipes(recipesWithImageUrl);

    this.plantsService.getPlants().subscribe((plants) => {});
  }

  private addImageUrlsToPlants(plants: Omit<Plant, 'imageUrl'>[]): Plant[] {
    return plants.map((plant) => ({
      ...plant,
      imageUrl: `assets/plants/plant_${plant.id}.webp`,
    }));
  }

  private addImageUrlsToRecipes(recipes: Omit<Recipe, 'imageUrl'>[]): Recipe[] {
    return recipes.map((recipe) => ({
      ...recipe,
      imageUrl: `assets/recipes/recipe_${recipe.id}.webp`,
    }));
  }
}
