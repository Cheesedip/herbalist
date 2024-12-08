import { CommonModule, NgFor } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Plant } from '../../data/plant/plant';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-plants',
  imports: [CommonModule, RouterModule],
  templateUrl: './display-plants.component.html',
  styleUrl: './display-plants.component.scss',
})
export class DisplayPlantsComponent {
  public plants = input.required<Plant[]>();

  public plantsWithImageUrl = computed(() =>
    this.plants().map((plant) => ({
      ...plant,
      imageUrl: `assets/plants/plant_${plant.id}.jpeg`,
    }))
  );
}
