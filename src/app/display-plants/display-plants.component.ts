import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Plant } from '../../data/plant/plant';
import { RouterModule } from '@angular/router';
import { PlantRarity, PlantRarityColor } from '../../data/plant/rarity';
import { Biome } from '../../data/plant/biome';
import { ItemComponent } from '../display-recipes/item/item.component';

@Component({
  selector: 'app-display-plants',
  imports: [CommonModule, RouterModule, ItemComponent],
  templateUrl: './display-plants.component.html',
  styleUrl: './display-plants.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayPlantsComponent {
  public plants = input.required<Plant[]>();
  protected PlantRarityColor = PlantRarityColor;

  protected getRarityImgUrl(rarity: PlantRarity): string {
    console.log({ rarity });
    return `/assets/rarity/${rarity}.webp`;
  }

  protected getBiomeItem(biome: Biome): { name: string; imageUrl: string } {
    return {
      imageUrl: `/assets/biomes/${biome}.webp`,
      name: biome,
    };
  }
}
