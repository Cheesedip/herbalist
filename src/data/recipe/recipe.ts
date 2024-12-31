import { Ingredient, IngredientWithPlant } from './ingredient';

export type RecipeWithPlants = Omit<Recipe, 'ingredients'> & {
  ingredients: IngredientWithPlant[];
};

export enum PotionStrength {
  Mild = 'Mild',
  Potent = 'Potent',
  Infused = 'Infused',
  Mythic = 'Mythic',
}

export interface Recipe {
  id: number;
  ingredients: Ingredient[];
  effect: string;
  name: string;
  imageUrl: string;
  strength: PotionStrength;
}

export const brewingCost = {
  [PotionStrength.Mild]: '2 silver',
  [PotionStrength.Potent]: '1 gold',
  [PotionStrength.Infused]: '10 gold',
  [PotionStrength.Mythic]: '10 platinum',
} satisfies Record<PotionStrength, string>;

export const brewingTime = {
  [PotionStrength.Mild]: '5 minutes',
  [PotionStrength.Potent]: '15 minutes',
  [PotionStrength.Infused]: '1 hour',
  [PotionStrength.Mythic]: '24 hours',
} satisfies Record<PotionStrength, string>;
