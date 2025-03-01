import { Plant } from '../../../../data/ingredient/ingredient';
import { PlantRarityOrder } from '../../../../data/ingredient/rarity';

export type PlantsSortByOptions = 'name' | 'biome' | 'rarity' | 'appearance';

export const plantsSortFunctions: Record<
  PlantsSortByOptions,
  (a: Plant, b: Plant) => boolean
> = {
  name: (a, b) => a.name.localeCompare(b.name) < 0,
  biome: (a, b) => a.biome.localeCompare(b.biome) < 0,
  rarity: (a, b) => PlantRarityOrder[a.rarity] < PlantRarityOrder[b.rarity],
  appearance: (a, b) => a.appearance.localeCompare(b.appearance) < 0,
};
