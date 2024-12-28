import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RecipeWithPlants } from '../../../data/recipe/recipe';
import { ItemComponent } from '../item/item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipe',
  imports: [ItemComponent, NgFor],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeComponent {
  public recipe = input.required<RecipeWithPlants>();

  protected getNavLinkPlant(plantId: number): string {
    return `/plants/${plantId}`;
  }

  protected getNavLinkRecipe(recipeId: number): string {
    return `/recipes/${recipeId}`;
  }
}
