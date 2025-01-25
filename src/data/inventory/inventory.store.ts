import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed, effect } from '@angular/core';
import { Recipe, RecipeWithCount } from '../recipe/recipe';
import { PlantWithCount } from '../plant/plant';
import { LOCAL_STORAGE_VERSION_KEY } from '../../app/version';

const LOCAL_STORAGE_PAGE_KEY = 'inventoryStore';

type InventoryState = {
  isOpen: boolean;
  potions: RecipeWithCount[];
  plants: PlantWithCount[];
};

const initialState: InventoryState = {
  isOpen: false,
  potions: [],
  plants: [],
};

export const InventoryStore = signalStore(
  { providedIn: 'root' },
  withState(loadStateFromLocalStorage()),
  withComputed(({ potions, plants }) => ({
    potionCount: computed(() => potions().length),
    plantCount: computed(() => plants().length),
  })),
  withMethods((store) => ({
    addPlant(plant: PlantWithCount): void {
      patchState(store, () => {
        const existingPlant = store.plants().find((p) => p.id === plant.id);
        if (existingPlant) {
          return {
            plants: store
              .plants()
              .map((p) =>
                p.id === plant.id ? { ...p, count: p.count + plant.count } : p
              ),
          };
        } else {
          return { plants: [...store.plants(), plant] };
        }
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

        // Remove ingredients from plants
        const updatedPlants = store
          .plants()
          .map((plant) => {
            const ingredient = recipe.ingredients.find(
              (ingredient) => ingredient.plantId === plant.id
            );

            if (!ingredient) {
              return plant;
            }

            const updatedCount = plant.count - ingredient.count;
            if (updatedCount <= 0) {
              return null;
            }

            return { ...plant, count: updatedCount };
          })
          .filter((plant) => plant !== null);

        return {
          potions: updatedPotions,
          plants: updatedPlants,
        };
      });
    },
    toggleInventory(): void {
      patchState(store, () => ({ isOpen: !store.isOpen() }));
    },
    canCraft(recipe: Recipe): boolean {
      return recipe.ingredients.every((ingredient) => {
        const plant = store
          .plants()
          .find((plant) => plant.id === ingredient.plantId);
        return plant && plant.count >= ingredient.count;
      });
    },
  })),
  // Computed signal to automatically save state on any update
  withHooks({
    onInit(store) {
      effect(() => {
        const state = {
          potions: store.potions(),
          plants: store.plants(),
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
