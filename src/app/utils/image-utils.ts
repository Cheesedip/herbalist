import { Biome } from '../../data/plant/biome';
import { PlantRarity } from '../../data/plant/rarity';

export function getRarityImageUrl(rarity: PlantRarity): string {
  return `/assets/rarity/${rarity}.webp`;
}

export function getBiomeImageUrl(biome: Biome): string {
  return `/assets/biomes/${biome}.webp`;
}
