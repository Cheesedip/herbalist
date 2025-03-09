import { PlantOdds } from './ingredient';
import { PlantRarity } from './rarity';

/**
 * Generates an array of length 'roll' with values between 0-100
 * based on the PlantRarity enum, each entry in the array will possibily
 * result in a plant of a certain rarity (The lower the random value the
 * higher quality the plant)
 * @param roll The roll of the player
 * @returns For each plant rarity the number of plants gathered
 */
export function linearGatherFunction(
  roll: number
): Record<PlantRarity, number> {
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
 * Differences between linear function:
 * Number of rolls is divided by 2
 * The odds are increased based on the roll
 */
export function smootherFunction(roll: number): Record<PlantRarity, number> {
  const rnd = Array.from(
    { length: Math.ceil(roll / 2) },
    () => Math.random() * 100
  );

  // Initialize counts
  const gatherRarity = Object.keys(PlantOdds).reduce(
    (acc, key) => ({ ...acc, [key]: 0 }),
    {} as Record<PlantRarity, number>
  );

  // Adjust odds
  const adjustedOdds = { ...PlantOdds };

  // Scale rarities smoothly based on the roll
  adjustedOdds.Epic += roll * 0.1;
  adjustedOdds.Rare += roll * 0.4;
  adjustedOdds.Uncommon += roll * 0.6;
  adjustedOdds.Common += roll * 0.8;

  rnd.reduce((acc, value) => {
    for (const rarity of Object.keys(adjustedOdds) as PlantRarity[]) {
      if (value <= adjustedOdds[rarity]) {
        acc[rarity]++;
        break; // Stop checking once the rarity is matched
      }
    }
    return acc;
  }, gatherRarity);
  return gatherRarity;
}
