import { Biome } from '../../data/ingredient/biome';
import { PlantRarity } from '../../data/ingredient/rarity';

export function getRarityImageUrl(rarity: PlantRarity): string {
  return `/assets/rarity/${rarity}.webp`;
}

export function getBiomeImageUrl(biome: Biome): string {
  return `/assets/biomes/${biome}.webp`;
}
