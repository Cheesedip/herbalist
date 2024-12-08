import { Plant } from '../plant/plant';

export interface Ingredient {
  count: number;
  plantId: number;
  plant?: Plant;
}
