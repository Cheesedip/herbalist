import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Plant } from '../../data/plant/plant';
import { RouterModule } from '@angular/router';
import { PlantRarityColor } from '../../data/plant/rarity';
import { ItemComponent } from '../display-recipes/item/item.component';
import { DialogService } from '@ngneat/dialog';
import { RarityExplanationModalComponent } from '../rarity-explanation-modal/rarity-explanation-modal.component';
import { SortableHeaderComponent } from '../ui-components/sortable-header/sortable-header.component';

@Component({
  selector: 'app-display-plants',
  imports: [CommonModule, RouterModule, ItemComponent, SortableHeaderComponent],
  templateUrl: './display-plants.component.html',
  styleUrl: './display-plants.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayPlantsComponent {
  private dialog = inject(DialogService);

  public plants = input<Plant[]>();
  public counts = input<number[]>();
  protected PlantRarityColor = PlantRarityColor;

  protected onSort(event: any): void {
    console.log('Sorting by', event);
  }

  protected openRarityExplanationModal(): void {
    this.dialog.open(RarityExplanationModalComponent);
  }
}
