import { Plant } from '../plant/plant';

export type IngredientWithPlant = Ingredient & { plant: Plant };

export interface Ingredient {
  count: number;
  plantId: number;
}
