import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Plant } from '../../data/plant/plant';
import { RouterModule } from '@angular/router';
import { PlantRarityColor } from '../../data/plant/rarity';
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
  public plants = input<Plant[]>();
  public counts = input<number[]>();
  protected PlantRarityColor = PlantRarityColor;
}
