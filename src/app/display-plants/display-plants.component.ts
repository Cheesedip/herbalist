import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Plant } from '../../data/plant/plant';
import { RouterModule } from '@angular/router';
import { PlantRarityColor } from '../../data/plant/rarity';

@Component({
  selector: 'app-display-plants',
  imports: [CommonModule, RouterModule],
  templateUrl: './display-plants.component.html',
  styleUrl: './display-plants.component.scss',
})
export class DisplayPlantsComponent {
  public plants = input.required<Plant[]>();
  protected PlantRarityColor = PlantRarityColor;
}
