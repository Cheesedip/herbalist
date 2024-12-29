import { Component, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  brewingCost,
  brewingTime,
  RecipeWithPlants,
} from '../../../data/recipe/recipe';
import {
  addPlantsToRecipes,
  getRecipeById,
} from '../../../data/recipe/recipe.repository';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../../display-recipes/item/item.component';

@Component({
  selector: 'app-recipe-page',
  imports: [CommonModule, ItemComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss',
})
export class RecipePageComponent {
  protected recipe: WritableSignal<RecipeWithPlants | undefined> =
    signal(undefined);
  protected brewingCost = brewingCost;
  protected brewingTime = brewingTime;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const recipeId = Number(params.get('recipeId'));
      const recipe = getRecipeById(recipeId);

      if (!recipe) {
        console.error(`Recipe with id ${recipeId} not found`);
        return;
      }

      this.recipe.set(addPlantsToRecipes([recipe])[0]);
    });
  }
}
