import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeWithPlants } from '../../data/recipe/recipe';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-display-recipes',
  imports: [CommonModule, RouterModule, ItemComponent],
  templateUrl: './display-recipes.component.html',
  styleUrl: './display-recipes.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayRecipesComponent {
  public recipesWithPlants = input.required<RecipeWithPlants[]>();
}
