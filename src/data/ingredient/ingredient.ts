import { Biome } from './biome';
import { PlantRarity } from './rarity';

export function isPlant(ingredient: AnyIngredient): ingredient is Plant {
  return ingredient.ingredientType === IngredientType.Plant;
}

export function isBasicIngredient(
  ingredient: AnyIngredient
): ingredient is BasicIngredient {
  return ingredient.ingredientType === IngredientType.Other;
}

export enum IngredientType {
  Other = 'Other',
  Plant = 'Plant',
}

export abstract class Ingredient {
  public id!: number;
  public name!: string;
  public appearance!: string;
  public imageUrl!: string;
  public count!: number;

  public abstract ingredientType: IngredientType;
}

export class Plant extends Ingredient {
  public rarity!: PlantRarity;
  public biome!: Biome;
  public ingredientType = IngredientType.Plant;
}

export class BasicIngredient extends Ingredient {
  public ingredientType = IngredientType.Other;
}

// Important, this enum must start with the most rare value
export const PlantOdds = {
  [PlantRarity.EPIC]: 1, // 1% chance for Epic plants
  [PlantRarity.RARE]: 6, // 5% chance for Rare plants
  [PlantRarity.UNCOMMON]: 26, // 20% chance for Uncommon plants
  [PlantRarity.COMMON]: 66, // 40% chance for Common plants
} satisfies Record<PlantRarity, number>;

export type AnyIngredient = Plant | BasicIngredient;
