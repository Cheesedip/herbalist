import { Biome } from './biome';
import { Plant, PlantOdds } from './plant';
import { getPlants } from './plant.repository';
import { PlantRarity } from './rarity';

export type GatherResult = { plant: Plant; count: number };

export function gather(roll: number, biomes: Biome[]): GatherResult[] {
  if (roll < 0) {
    throw Error('Roll can not be lower than 0');
  }

  if (biomes.length < 1) {
    throw Error('Must provide at least one biome');
  }

  const plantsInBiomes = getPlants().filter(({ biome }) =>
    biomes.includes(biome)
  );

  const gatherRarity = calculateGatherRarity(roll);

  const plants = pickPlants(gatherRarity, plantsInBiomes);

  return countPlants(plants);
}

/**
 * Generates an array of length roll with values between 0-100
 * based on the PlantRarity enum, each entry in the array will possibily
 * result in a plant of a certain rarity (The lower the random value the
 * higher quality the plant)
 * @param roll The roll of the player
 * @returns For each plant rarity the number of plants gathered
 */
function calculateGatherRarity(roll: number): Record<PlantRarity, number> {
  const rnd = Array.from({ length: roll }, () => Math.random() * 100);

  // Initialize counts
  const gatherRarity = Object.keys(PlantOdds).reduce(
    (acc, key) => ({ ...acc, [key]: 0 }),
    {} as Record<PlantRarity, number>
  );

  rnd.reduce((acc, value) => {
    for (const rarity of Object.keys(PlantOdds) as PlantRarity[]) {
      if (value <= PlantOdds[rarity]) {
        acc[rarity]++;
        break; // Stop checking once the rarity is matched
      }
    }
    return acc;
  }, gatherRarity);

  return gatherRarity;
}

/**
 * For each gatherRarity pick a random plant from the available plantsInBiomes
 * @param gatherRarity
 * @param plantsInBiomes
 * @returns
 */
function pickPlants(
  gatherRarity: Record<PlantRarity, number>,
  plantsInBiomes: Plant[]
) {
  const gatheredPlants: Plant[] = [];
  for (const rarityKey of Object.keys(gatherRarity)) {
    const rarity = rarityKey as PlantRarity;
    const count = gatherRarity[rarity];
    const plantsMatchingRarity = plantsInBiomes.filter(
      (plant) => plant.rarity === rarity
    );
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(
        Math.random() * plantsMatchingRarity.length
      );

      gatheredPlants.push(plantsMatchingRarity[randomIndex]);
    }
  }

  return gatheredPlants;
}

/**
 * Count the number of each plant gathered
 * @param plants
 * @returns
 */
function countPlants(plants: Plant[]): GatherResult[] {
  return plants.reduce((acc, plant) => {
    const existing = acc.find((p) => p.plant.id === plant.id);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ plant, count: 1 });
    }
    return acc;
  }, [] as GatherResult[]);
}
