import { NgFor } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Plant } from '../../data/plant/plant';

@Component({
  selector: 'app-display-plants',
  imports: [NgFor],
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
