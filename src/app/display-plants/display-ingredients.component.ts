import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { AnyIngredient, Ingredient, isPlant, Plant } from '../../data/ingredient/ingredient';
import { RouterModule } from '@angular/router';
import { PlantRarityColor } from '../../data/ingredient/rarity';
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
  selector: 'app-display-ingredients',
  imports: [CommonModule, RouterModule, ItemComponent, SortableHeaderComponent],
  templateUrl: './display-ingredients.component.html',
  styleUrl: './display-ingredients.component.scss',
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
export class DisplayIngredientsComponent {
  private dialog = inject(DialogService);
  private sortingService = inject(SortingService);
  protected isPlant = isPlant;

  public ingredients = input.required<AnyIngredient[]>();

  protected sortedIngredients = computed(() => {
    const sortByFn = this.sortingService.sortByFn();
    const ingredients = this.ingredients();
    return ingredients.sort(sortByFn);
  });

  protected PlantRarityColor = PlantRarityColor;

  protected openRarityExplanationModal(): void {
    this.dialog.open(RarityExplanationModalComponent);
  }
}
