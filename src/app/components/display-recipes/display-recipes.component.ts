import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemComponent } from '../../ui-components/item/item.component';
import { InventoryStore } from '../../../data/inventory/inventory.store';
import { SortableHeaderComponent } from '../../ui-components/sortable-header/sortable-header.component';
import { SortingService } from '../../services/sorting/sorting.service';
import {
  RecipeSortByOptions,
  recipesSortFunctions,
} from '../../services/sorting/recipe-sort-functions';
import { PopulatedRecipe } from '../../../data/recipe/recipe';

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
        new SortingService<RecipeSortByOptions>(recipesSortFunctions, 'tmp'),
    },
  ],
})
export class DisplayRecipesComponent {
  protected inventoryStore = inject(InventoryStore);
  public recipes = input.required<PopulatedRecipe[]>();
  private sortingService = inject(SortingService);

  protected sortedRecipes = computed(() => {
    const inventoryIngredients = this.inventoryStore.ingredients();
    const recipes = this.recipes();
    const sortByFn = this.sortingService.sortByFn();
    return recipes
      .map((recipe) => {
        const maxCraftable = Math.min(
          ...recipe.ingredients.map((recipeIngredient) => {
            const ingredient = inventoryIngredients.find(
              (ingredient) => ingredient.id === recipeIngredient.id
            );

            if (!recipeIngredient.count || !ingredient) {
              return 0;
            }
            return ingredient
              ? Math.floor(ingredient.count / recipeIngredient.count)
              : 0;
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
