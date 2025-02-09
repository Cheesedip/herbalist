import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeWithPlants } from '../../data/recipe/recipe';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { InventoryStore } from '../../data/inventory/inventory.store';
import { SortableHeaderComponent } from '../ui-components/sortable-header/sortable-header.component';
import { SortingService } from '../ui-components/sortable-header/sorting/sorting.service';
import {
  RecipeSortByOptions,
  recipesSortFunctions,
} from '../ui-components/sortable-header/sorting/recipe-sort-functions';

@Component({
  selector: 'app-display-recipes',
  imports: [CommonModule, RouterModule, ItemComponent, SortableHeaderComponent],
  templateUrl: './display-recipes.component.html',
  styleUrl: './display-recipes.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: SortingService,
      useFactory: () =>
        new SortingService<RecipeSortByOptions>(recipesSortFunctions),
    },
  ],
})
export class DisplayRecipesComponent {
  protected inventoryStore = inject(InventoryStore);
  public recipesWithPlants = input.required<RecipeWithPlants[]>();
  private sortingService = inject(SortingService);

  protected recipes = computed(() => {
    const inventory = this.inventoryStore.plants();
    const recipes = this.recipesWithPlants();
    const sortByFn = this.sortingService.sortByFn();
    return recipes
      .map((recipe) => {
        const maxCraftable = Math.min(
          ...recipe.ingredients.map((ingredient) => {
            const plant = inventory.find(
              (plant) => plant.id === ingredient.plant.id
            );
            return plant ? Math.floor(plant.count / ingredient.count) : 0;
          })
        );

        return {
          ...recipe,
          maxCraftable,
        };
      })
      .sort(sortByFn);
  });
}
