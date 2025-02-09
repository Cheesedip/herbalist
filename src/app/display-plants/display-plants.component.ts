import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
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
import { SortingService } from '../ui-components/sortable-header/sorting/sorting.service';
import {
  PlantsSortByOptions,
  plantsSortFunctions,
} from '../ui-components/sortable-header/sorting/plants-sort-functions';

@Component({
  selector: 'app-display-plants',
  imports: [CommonModule, RouterModule, ItemComponent, SortableHeaderComponent],
  templateUrl: './display-plants.component.html',
  styleUrl: './display-plants.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: SortingService,
      useFactory: () =>
        new SortingService<PlantsSortByOptions>(plantsSortFunctions),
    },
  ],
})
export class DisplayPlantsComponent {
  private dialog = inject(DialogService);
  private sortingService = inject(SortingService);

  public plants = input.required<Plant[]>();
  public counts = input<number[]>();

  protected sortedPlants = computed(() => {
    const sortByFn = this.sortingService.sortByFn();
    const plants = this.plants();
    return plants.sort(sortByFn);
  });

  protected PlantRarityColor = PlantRarityColor;

  protected openRarityExplanationModal(): void {
    this.dialog.open(RarityExplanationModalComponent);
  }
}
