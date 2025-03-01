import {
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed, Signal } from '@angular/core';
import {
  AnyIngredient,
  Ingredient,
  isBasicIngredient,
  isPlant,
} from '../ingredient/ingredient';
import { ingredients } from './ingredients';

type IngredientsState = {
  ingredients: AnyIngredient[];
};

const initialState: IngredientsState = {
  ingredients: ingredients,
};

export const IngredientsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ ingredients }) => ({
    plants: computed(() => ingredients().filter((i) => isPlant(i))),
    basicIngredients: computed(() =>
      ingredients().filter((i) => isBasicIngredient(i))
    ),
  })),
  withMethods((store) => ({
    getIngredientById(id: number): Ingredient {
      const ingredient = store.ingredients().find((i) => i.id === id);
      if (!ingredient) {
        throw new Error(`Ingredient with id ${id} not found`);
      }
      return ingredient;
    },
  }))
);
