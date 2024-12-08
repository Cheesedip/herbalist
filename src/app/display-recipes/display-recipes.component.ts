import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Recipe } from '../../data/recipe/recipe';
import { CommonModule } from '@angular/common';
import { Plant } from '../../data/plant/plant';

@Component({
  selector: 'app-display-recipes',
  imports: [CommonModule],
  templateUrl: './display-recipes.component.html',
  styleUrl: './display-recipes.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayRecipesComponent {
  public recipes = input.required<Recipe[]>();
  public plants = input.required<Plant[]>();

  protected recipesWithPlants = computed(() => {
    const recipes = this.recipes();
    const plants = this.plants();
    return recipes.map((recipe) => {
      recipe.ingredients = recipe.ingredients.map((ingredient) => {
        ingredient.plant = plants.find(
          (plant) => plant.id === ingredient.plantId
        );
        return ingredient;
      });
      return recipe;
    });
  });
}
