import { Ingredient } from '../ingredient/ingredient';

export type IdRequired<T> = Partial<T> & {
  id: T extends { id: infer U } ? U : never;
  count: T extends { count: infer U } ? U : never;
};

export enum PotionStrength {
  Mild = 'Mild',
  Potent = 'Potent',
  Infused = 'Infused',
  Mythic = 'Mythic',
}

export class Recipe {
  public id!: number;
  public ingredients: IdRequired<Ingredient>[] = [];
  public effect!: string;
  public description?: string;
  public name!: string;
  public imageUrl!: string;
  public strength!: PotionStrength;
  public count = 0;
  public maxCraftable?: number;
}

export type PopulatedRecipe = Omit<Recipe, 'ingredients'>& {
  ingredients: Ingredient[];
};

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

export const potionStrengthOrder = {
  [PotionStrength.Mild]: 0,
  [PotionStrength.Potent]: 1,
  [PotionStrength.Infused]: 2,
  [PotionStrength.Mythic]: 3,
} satisfies Record<PotionStrength, number>;
