export enum PlantRarity {
  COMMON = 'Common',
  UNCOMMON = 'Uncommon',
  RARE = 'Rare',
}

export const PlantRarityColor: Record<PlantRarity, string> = {
  [PlantRarity.COMMON]: 'blue',
  [PlantRarity.UNCOMMON]: 'purple',
  [PlantRarity.RARE]: 'orange',
};
