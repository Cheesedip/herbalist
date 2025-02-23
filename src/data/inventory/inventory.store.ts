import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed, effect } from '@angular/core';
import { Recipe } from '../recipe/recipe';
import { LOCAL_STORAGE_VERSION_KEY } from '../../app/version';
import { Ingredient } from '../ingredient/ingredient';

const LOCAL_STORAGE_PAGE_KEY = 'inventoryStore';

type InventoryState = {
  isOpen: boolean;
  potions: Recipe[];
  ingredients: Ingredient[];
};

const initialState: InventoryState = {
  isOpen: false,
  potions: [],
  ingredients: [],
};

export const InventoryStore = signalStore(
  { providedIn: 'root' },
  withState(loadStateFromLocalStorage()),
  withComputed(({ potions, ingredients }) => ({
    potionCount: computed(() => potions().length),
    ingredientCount: computed(() => ingredients().length),
  })),
  withMethods((store) => ({
    addIngredient(ingredient: Ingredient): void {
      patchState(store, () => {
        const inventoryIngredient = store
          .ingredients()
          .find((p) => p.id === ingredient.id);
        if (inventoryIngredient) {
          return {
            ingredients: store
              .ingredients()
              .map((i) =>
                i.id === ingredient.id
                  ? { ...i, count: i.count + ingredient.count }
                  : i
              ),
          };
        } else {
          return { ingredients: [...store.ingredients(), ingredient] };
        }
      });
    },
    removeIngredient(ingredient: Ingredient): void {
      patchState(store, () => {
        const inventoryIngredient = store
          .ingredients()
          .find((p) => p.id === ingredient.id);
        if (!inventoryIngredient) {
          return { ingredients: store.ingredients() };
        }

        const updatedIngredients = store
          .ingredients()
          .map((i) =>
            i.id === ingredient.id
              ? { ...i, count: i.count - ingredient.count }
              : i
          )
          .filter((p) => p.count > 0);

        return { ingredients: updatedIngredients };
      });
    },
    craftPotion(recipe: Recipe): void {
      patchState(store, () => {
        const existingPotion = store.potions().find((p) => p.id === recipe.id);
        // Update potions
        let updatedPotions;
        if (existingPotion) {
          updatedPotions = store
            .potions()
            .map((p) =>
              p.id === recipe.id ? { ...p, count: p.count + 1 } : p
            );
        } else {
          updatedPotions = [...store.potions(), { ...recipe, count: 1 }];
        }

        // Remove ingredients from inventory
        const updatedIngredients = store
          .ingredients()
          .map((ingredient) => {
            const recipeIngredient = recipe.ingredients.find(
              (ingredient) => ingredient.id === ingredient.id
            );

            if (!recipeIngredient) {
              return ingredient;
            }

            const updatedCount =
              ingredient.count - (recipeIngredient.count ?? 0);
            if (updatedCount <= 0) {
              return null;
            }

            return { ...ingredient, count: updatedCount };
          })
          .filter((ingredient) => ingredient !== null);

        return {
          potions: updatedPotions,
          ingredients: updatedIngredients,
        };
      });
    },
    drinkPotion(recipe: Recipe): void {
      patchState(store, () => {
        const potion = store.potions().find((p) => p.id === recipe.id);
        if (!potion) {
          return { potions: store.potions() };
        }

        const updatedPotions = store
          .potions()
          .map((p) => (p.id === recipe.id ? { ...p, count: p.count - 1 } : p))
          .filter((p) => p.count > 0);

        return { potions: updatedPotions };
      });
    },
    toggleInventory(): void {
      patchState(store, () => ({ isOpen: !store.isOpen() }));
    },
    canCraft(recipe: Recipe): boolean {
      return recipe.ingredients.every((recipeIngredient) => {
        const ingredient = store
          .ingredients()
          .find((ingredient) => ingredient.id === recipeIngredient.id);
        return ingredient && ingredient.count >= (recipeIngredient.count ?? 0);
      });
    },
    canDrink(recipe: Recipe): boolean {
      return store.potions().some((potion) => potion.id === recipe.id);
    },
    clearInventory(): void {
      patchState(store, () => {
        return { ...initialState, isOpen: true };
      });
    },
  })),
  // Computed signal to automatically save state on any update
  withHooks({
    onInit(store) {
      effect(() => {
        const state = {
          potions: store.potions(),
          ingredients: store.ingredients(),
          isOpen: store.isOpen(),
        };
        saveStateToLocalStorage(state);
      });
    },
  })
);

function loadStateFromLocalStorage(): InventoryState {
  const savedState = localStorage.getItem(
    `${LOCAL_STORAGE_VERSION_KEY}-${LOCAL_STORAGE_PAGE_KEY}-state`
  );
  return savedState ? JSON.parse(savedState) : initialState;
}

function saveStateToLocalStorage(state: InventoryState): void {
  localStorage.setItem(
    `${LOCAL_STORAGE_VERSION_KEY}-${LOCAL_STORAGE_PAGE_KEY}-state`,
    JSON.stringify(state)
  );
}
