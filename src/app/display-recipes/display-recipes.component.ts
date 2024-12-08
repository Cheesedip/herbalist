import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Recipe } from '../../data/recipe/recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-recipes',
  imports: [CommonModule],
  templateUrl: './display-recipes.component.html',
  styleUrl: './display-recipes.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayRecipesComponent {
  public recipes = input.required<Recipe[]>();
}
