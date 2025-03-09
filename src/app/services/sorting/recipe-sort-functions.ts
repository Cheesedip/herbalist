import { potionStrengthOrder, Recipe } from '../../../data/recipe/recipe';

export type RecipeSortByOptions = 'name' | 'strength' | 'effect' | 'craftable';

export const recipesSortFunctions: Record<
  RecipeSortByOptions,
  (a: Recipe, b: Recipe) => boolean
> = {
  name: (a, b) => a.name.localeCompare(b.name) < 0,
  effect: (a, b) => (a.effect || '').localeCompare(b.effect || '') < 0,
  strength: (a, b) =>
    potionStrengthOrder[a.strength] > potionStrengthOrder[b.strength],
  craftable: (a, b) => (a.maxCraftable || 0) > (b.maxCraftable || 0),
};
