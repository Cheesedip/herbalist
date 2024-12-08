import { Biome } from './biome';

export interface Plant {
  id: number;
  name: string;
  appearance: string;
  use: string;
  rarity: PlantRarity;
  biome: Biome;
  imageUrl?: string;
}

export enum PlantRarity {
  COMMON = 'Common',
  UNCOMMON = 'Uncommon',
  RARE = 'Rare',
}

// Important, this enum must start with the most rare value
export const PlantOdds = {
  [PlantRarity.RARE]: 3, // 3% chance for Rare plants
  [PlantRarity.UNCOMMON]: 13, // 10% chance for Uncommon plants
  [PlantRarity.COMMON]: 33, // 20% chance for Common plants
} satisfies Record<PlantRarity, number>;
