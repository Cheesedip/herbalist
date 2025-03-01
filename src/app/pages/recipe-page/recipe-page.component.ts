import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  brewingCost,
  brewingTime,
  PopulatedRecipe,
  Recipe,
} from '../../../data/recipe/recipe';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../../display-recipes/item/item.component';
import { InventoryStore } from '../../../data/inventory/inventory.store';
import { RecipesStore } from '../../../data/recipe/recipes.store';

@Component({
  selector: 'app-recipe-page',
  imports: [CommonModule, ItemComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss',
})
export class RecipePageComponent {
  private CRAFT_POTION_TIME_MS = 2000;
  private DRINK_POTION_TIME_MS = 1000;

  protected inventoryStore = inject(InventoryStore);
  private recipesStore = inject(RecipesStore);
  private router = inject(Router);

  protected recipe: WritableSignal<PopulatedRecipe | undefined> = signal(undefined);
  protected brewingCost = brewingCost;
  protected brewingTime = brewingTime;

  protected canCraft = this.inventoryStore.canCraft;
  protected isCrafting = signal(false);
  protected craftingProgress = signal(0);

  protected canDrink = this.inventoryStore.canDrink;
  protected isDrinking = signal(false);
  protected drinkingProgress = signal(0);

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const recipeId = Number(params.get('recipeId'));
      const recipe = this.recipesStore.getRecipeByIdWithIngredients(recipeId);

      if (!recipe) {
        this.router.navigate(['/notfound']);
        console.error(`Recipe with id ${recipeId} not found`);
        return;
      }

      this.recipe.set(recipe);
    });
  }

  protected async craftPotion(): Promise<void> {
    const recipe = this.recipe();
    if (!recipe) {
      return;
    }

    let interval = this.CRAFT_POTION_TIME_MS / 100;
    let increment = 100 / (this.CRAFT_POTION_TIME_MS / interval);

    this.craftingProgress.set(0);

    // Wait for 2 seconds for dramatic potion brewing immersion effects
    await new Promise<void>((resolve) => {
      const timer = setInterval(() => {
        this.craftingProgress.set(this.craftingProgress() + increment);
        if (this.craftingProgress() >= 100) {
          this.craftingProgress.set(100);
          clearInterval(timer);
          resolve();
        }
      }, interval);
    });
    this.inventoryStore.craftPotion(recipe);

    if (!this.inventoryStore.isOpen()) {
      this.inventoryStore.toggleInventory();
    }

    this.craftingProgress.set(0);
  }

  protected async drinkPotion(): Promise<void> {
    const recipe = this.recipe();
    if (!recipe) {
      return;
    }

    let interval = this.DRINK_POTION_TIME_MS / 100;
    let increment = 100 / (this.DRINK_POTION_TIME_MS / interval);

    this.drinkingProgress.set(0);

    // Wait for 2 seconds for dramatic potion brewing immersion effects
    await new Promise<void>((resolve) => {
      const timer = setInterval(() => {
        this.drinkingProgress.set(this.drinkingProgress() + increment);
        if (this.drinkingProgress() >= 100) {
          this.drinkingProgress.set(100);
          clearInterval(timer);
          resolve();
        }
      }, interval);
    });
    this.inventoryStore.drinkPotion(recipe);

    if (!this.inventoryStore.isOpen()) {
      this.inventoryStore.toggleInventory();
    }

    this.drinkingProgress.set(0);
  }
}
