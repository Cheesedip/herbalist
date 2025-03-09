import { inject, Injectable } from '@angular/core';
import { Biome } from './biome';
import { Plant, PlantOdds } from './ingredient';
import { PlantRarity } from './rarity';
import { IngredientsStore } from './ingredient.store';
import { linearGatherFunction, smootherFunction } from './gather-functions';

@Injectable({ providedIn: 'root' })
export class GatherService {
  private ingredientsStore = inject(IngredientsStore);

  public gather(roll: number, biomes: Biome[]): Plant[] {
    if (roll < 0) {
      throw Error('Roll can not be lower than 0');
    }

    if (biomes.length < 1) {
      throw Error('Must provide at least one biome');
    }

    const plantsInBiomes = this.ingredientsStore
      .plants()
      .filter(({ biome }) => biomes.includes(biome));

    const gatherRarity = this.calculateGatherRarity(roll);

    const plants = this.pickPlants(gatherRarity, plantsInBiomes);

    // If no plants were gathered add a random common plant to prevent sadPepe
    if (plants.length === 0) {
      plants.push(
        plantsInBiomes.find((plant) => plant.rarity === PlantRarity.COMMON)!
      );
    }

    return this.countPlants(plants);
  }

  public calculateGatherRarity(roll: number): Record<PlantRarity, number> {
    return smootherFunction(roll);
  }

  /**
   * For each gatherRarity pick a random plant from the available plantsInBiomes
   * @param gatherRarity
   * @param plantsInBiomes
   * @returns
   */
  private pickPlants(
    gatherRarity: Record<PlantRarity, number>,
    plantsInBiomes: Plant[]
  ) {
    const gatheredPlants: Plant[] = [];
    for (const rarityKey of Object.keys(gatherRarity)) {
      const rarity = rarityKey as PlantRarity;
      const count = gatherRarity[rarity];
      const plantsMatchingRarity = this.getPlantsMatchingRarity(
        rarity,
        plantsInBiomes
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
   * Fixes edge case, if no plants of the desired rarity are found
   * E.g.there are no epic plants in the forest biome so then we give the
   * gatherer a rare plant instead
   * @param rarity
   * @param plantsInBiomes
   * @returns
   */
  private getPlantsMatchingRarity(
    rarity: PlantRarity,
    plantsInBiomes: Plant[]
  ): Plant[] {
    let plantsMatchingRarity: Plant[] = [];
    while (1) {
      plantsMatchingRarity = plantsInBiomes.filter(
        (plant) => plant.rarity === rarity
      );
      if (plantsMatchingRarity.length > 0) {
        break;
      }
      rarity = this.reduceRarity(rarity);
    }
    return plantsMatchingRarity;
  }

  private reduceRarity(rarity: PlantRarity): PlantRarity {
    switch (rarity) {
      case PlantRarity.EPIC:
        return PlantRarity.RARE;
      case PlantRarity.RARE:
        return PlantRarity.UNCOMMON;
      case PlantRarity.UNCOMMON:
        return PlantRarity.COMMON;
      case PlantRarity.COMMON:
        return PlantRarity.COMMON;
    }
  }

  /**
   * Count the number of each plant gathered
   * @param plants
   * @returns
   */
  private countPlants(plants: Plant[]): Plant[] {
    return plants.reduce((acc, plant) => {
      const existing = acc.find((p) => p.id === plant.id);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ ...plant, count: 1 });
      }
      return acc;
    }, [] as Plant[]);
  }
}
