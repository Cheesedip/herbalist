export enum PlantRarity {
  COMMON = 'Common',
  UNCOMMON = 'Uncommon',
  RARE = 'Rare',
}

export const PlantRarityColor: Record<PlantRarity, string> = {
  [PlantRarity.COMMON]: '#4caf50',
  [PlantRarity.UNCOMMON]: '#2196f3',
  [PlantRarity.RARE]: '#9c27b0',
};
