import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyIngredient, isPlant } from '../../../data/ingredient/ingredient';
import { CommonModule, Location } from '@angular/common';
import { DisplayRecipesComponent } from '../../display-recipes/display-recipes.component';
import { RecipeComponent } from '../../display-recipes/recipe/recipe.component';
import { ItemComponent } from '../../display-recipes/item/item.component';
import { DialogService } from '@ngneat/dialog';
import { RarityExplanationModalComponent } from '../../rarity-explanation-modal/rarity-explanation-modal.component';
import { InventoryStore } from '../../../data/inventory/inventory.store';
import { IngredientsStore } from '../../../data/ingredient/ingredient.store';
import { RecipesStore } from '../../../data/recipe/recipes.store';
import { PopulatedRecipe, Recipe } from '../../../data/recipe/recipe';

@Component({
  selector: 'app-ingredient-page',
  imports: [
    CommonModule,
    DisplayRecipesComponent,
    RecipeComponent,
    ItemComponent,
  ],
  templateUrl: './ingredient-page.component.html',
  styleUrl: './ingredient-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientPageComponent {
  private inventoryStore = inject(InventoryStore);
  private ingredientsStore = inject(IngredientsStore);
  private recipesStore = inject(RecipesStore);
  private dialog = inject(DialogService);

  protected isPlant = isPlant;

  protected ingredient: WritableSignal<AnyIngredient | undefined> =
    signal(undefined);
  protected recipes: WritableSignal<PopulatedRecipe[]> = signal([]);

  constructor(private route: ActivatedRoute, private location: Location) {
    this.route.paramMap.subscribe((params) => {
      const ingredientId = Number(params.get('ingredientId'));
      this.ingredient.set(
        this.ingredientsStore.getIngredientById(ingredientId)
      );
      console.log(this.ingredient());

      this.recipes.set(
        this.recipesStore
          .recipes()
          .filter((recipe) =>
            recipe.ingredients.some(
              (ingredient) => ingredientId === ingredient.id
            )
          )
          .map((recipe) =>
            this.recipesStore.getRecipeByIdWithIngredients(recipe.id)
          )
          .filter((recipe) => !!recipe)
      );
    });
  }

  goBack() {
    this.location.back();
  }

  protected openRarityExplanationModal(): void {
    this.dialog.open(RarityExplanationModalComponent);
  }

  protected addIngredient(): void {
    const ingredient = this.ingredient();
    if (ingredient) {
      this.inventoryStore.addIngredient({ ...ingredient, count: 1 });
    }

    if (!this.inventoryStore.isOpen()) {
      this.inventoryStore.toggleInventory();
    }
  }

  protected removeIngredient(): void {
    const ingredienet = this.ingredient();
    if (ingredienet) {
      this.inventoryStore.removeIngredient({ ...ingredienet, count: 1 });
    }

    if (!this.inventoryStore.isOpen()) {
      this.inventoryStore.toggleInventory();
    }
  }
}
