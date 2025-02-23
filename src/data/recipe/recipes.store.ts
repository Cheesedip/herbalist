import {
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { PopulatedRecipe, Recipe } from './recipe';
import { recipes } from './recipes';
import { IngredientsStore } from '../ingredient/ingredient.store';
import { inject } from '@angular/core';

type RecipesState = {
  recipes: Recipe[];
};

const initialState: RecipesState = {
  recipes: recipes,
};

export const RecipesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ recipes }) => ({})),
  withMethods((store, ingredientsStore = inject(IngredientsStore)) => ({
    getRecipeByIdWithIngredients(id: number): PopulatedRecipe {
      const recipe = store.recipes().find((r) => r.id === id);
      if (!recipe) {
        throw new Error(`Recipe with id ${id} not found`);
      }
      const ingredients = recipe.ingredients.map((recipeIngredient) => {
        const ingredient = ingredientsStore.getIngredientById(
          recipeIngredient.id
        );
        return { ...ingredient, count: recipeIngredient.count };
      });
      return { ...recipe, ingredients };
    },
  }))
);
