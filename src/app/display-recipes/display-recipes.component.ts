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

@Component({
  selector: 'app-display-recipes',
  imports: [CommonModule, RouterModule, ItemComponent],
  templateUrl: './display-recipes.component.html',
  styleUrl: './display-recipes.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayRecipesComponent {
  protected inventoryStore = inject(InventoryStore);
  public recipesWithPlants = input.required<RecipeWithPlants[]>();

  protected recipes = computed(() => {
    const inventory = this.inventoryStore.plants();
    const recipes = this.recipesWithPlants();
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
      .sort((a, b) => b.maxCraftable - a.maxCraftable);
  });
}
