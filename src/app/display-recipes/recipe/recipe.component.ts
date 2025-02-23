import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { NgFor } from '@angular/common';
import { PopulatedRecipe } from '../../../data/recipe/recipe';

@Component({
  selector: 'app-recipe',
  imports: [ItemComponent, NgFor],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeComponent {
  public recipe = input.required<PopulatedRecipe>();

  protected getNavLinkIngredient(plantId: number): string {
    return `/ingredient/${plantId}`;
  }

  protected getNavLinkRecipe(recipeId: number): string {
    return `/recipes/${recipeId}`;
  }
}
