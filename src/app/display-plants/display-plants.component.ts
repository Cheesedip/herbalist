import { NgFor } from '@angular/common';
import { Component, input, Signal } from '@angular/core';
import { Plant } from '../../data/plant/plant';

@Component({
  selector: 'app-display-plants',
  imports: [NgFor],
  templateUrl: './display-plants.component.html',
  styleUrl: './display-plants.component.scss',
})
export class DisplayPlantsComponent {
  public plants: Signal<Plant[]> = input.required();
}
