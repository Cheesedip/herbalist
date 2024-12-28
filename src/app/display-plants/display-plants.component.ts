import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Plant } from '../../data/plant/plant';
import { RouterModule } from '@angular/router';
import { PlantRarity, PlantRarityColor } from '../../data/plant/rarity';
import { Biome } from '../../data/plant/biome';
import { ItemComponent } from '../display-recipes/item/item.component';
import { getBiomeImageUrl, getRarityImageUrl } from '../utils/image-utils';

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

  protected getRarityImageUrl(rarity: PlantRarity): string {
    return getRarityImageUrl(rarity);
  }

  protected getBiomeImageUrl(biome: Biome): string {
    return getBiomeImageUrl(biome);
  }
}
