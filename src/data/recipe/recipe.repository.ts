import { createStore, withProps } from '@ngneat/elf';
import { withEntities, selectAllEntities, setEntities, addEntities, updateEntities, deleteEntities, withUIEntities, withActiveId, selectActiveEntity, setActiveId, withActiveIds, selectActiveEntities, toggleActiveIds } from '@ngneat/elf-entities';

export interface RecipeUI {
  id: number;
}

export interface Recipe {
  id: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecipesProps {
}

export const store = createStore({ name: 'recipes' }, withProps<RecipesProps>({}), withEntities<Recipe>(), withUIEntities<RecipeUI>(), withActiveId(), withActiveIds());

export const activeRecipes$ = store.pipe(selectActiveEntities());

export const activeRecipe$ = store.pipe(selectActiveEntity());

export const recipes$ = store.pipe(selectAllEntities());

export function setRecipes(recipes: Recipe[]) {
  store.update(setEntities(recipes));
}

export function addRecipe(recipe: Recipe) {
  store.update(addEntities(recipe));
}

export function updateRecipe(id: Recipe['id'], recipe: Partial<Recipe>) {
  store.update(updateEntities(id, recipe));
}

export function deleteRecipe(id: Recipe['id']) {
  store.update(deleteEntities(id));
}

export function setActiveRecipesId(id: Recipe['id']) {
  store.update(setActiveId(id));
}

export function toggleActiveRecipesIds(ids: Array<Recipe['id']>) {
  store.update(toggleActiveIds(ids));
}
