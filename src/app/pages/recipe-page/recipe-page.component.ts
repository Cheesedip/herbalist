import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  brewingCost,
  brewingTime,
  Recipe,
  RecipeWithPlants,
} from '../../../data/recipe/recipe';
import {
  addPlantsToRecipes,
  getRecipeById,
} from '../../../data/recipe/recipe.repository';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../../display-recipes/item/item.component';
import { InventoryStore } from '../../../data/inventory/inventory.store';

@Component({
  selector: 'app-recipe-page',
  imports: [CommonModule, ItemComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss',
})
export class RecipePageComponent {
  protected inventoryStore = inject(InventoryStore);

  protected recipe: WritableSignal<RecipeWithPlants | undefined> =
    signal(undefined);
  protected brewingCost = brewingCost;
  protected brewingTime = brewingTime;

  protected canCraft = this.inventoryStore.canCraft;

  protected isCrafting = signal(false);
  protected progress = signal(0);

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const recipeId = Number(params.get('recipeId'));
      const recipe = getRecipeById(recipeId);

      if (!recipe) {
        console.error(`Recipe with id ${recipeId} not found`);
        return;
      }

      this.recipe.set(addPlantsToRecipes([recipe])[0]);
    });
  }

  protected async craftPotion(): Promise<void> {
    const recipe = this.recipe();
    if (!recipe) {
      return;
    }

    let interval = 2000 / 100;
    let increment = 100 / (2000 / interval);

    this.progress.set(0);

    // Wait for 2 seconds for dramatic potion brewing immersion effects
    await new Promise<void>((resolve) => {
      const timer = setInterval(() => {
        this.progress.set(this.progress() + increment);
        if (this.progress() >= 100) {
          this.progress.set(100);
          clearInterval(timer);
          resolve();
        }
      }, interval);
    });
    this.inventoryStore.craftPotion(recipe);

    if (!this.inventoryStore.isOpen()) {
      this.inventoryStore.toggleInventory();
    }
  }
}
