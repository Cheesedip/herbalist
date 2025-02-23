import { Plant } from '../ingredient/ingredient';

export type RecipePartWithPlant = RecipePart & { plant: Plant };

export interface RecipePart {
  count: number;
  plantId: number;
}
