import { Biome } from './biome';
import { PlantRarity } from './rarity';

export interface Plant {
  id: number;
  name: string;
  appearance: string;
  rarity: PlantRarity;
  biome: Biome;
  imageUrl: string;
}

// Important, this enum must start with the most rare value
export const PlantOdds = {
  [PlantRarity.EPIC]: 1, // 1% chance for Epic plants
  [PlantRarity.RARE]: 4, // 3% chance for Rare plants
  [PlantRarity.UNCOMMON]: 14, // 10% chance for Uncommon plants
  [PlantRarity.COMMON]: 34, // 20% chance for Common plants
} satisfies Record<PlantRarity, number>;
