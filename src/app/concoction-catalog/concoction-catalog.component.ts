import { Component, signal, WritableSignal } from '@angular/core';
import { RecipeWithPlants } from '../../data/recipe/recipe';
import {
  addPlantsToRecipes,
  getRecipes,
} from '../../data/recipe/recipe.repository';
import { DisplayRecipesComponent } from '../display-recipes/display-recipes.component';

@Component({
  selector: 'app-concoction-catalog',
  imports: [DisplayRecipesComponent],
  templateUrl: './concoction-catalog.component.html',
  styleUrl: './concoction-catalog.component.scss',
})
export class ConcoctionCatalogComponent {
  protected recipesWithPlants: WritableSignal<RecipeWithPlants[]> = signal(
    addPlantsToRecipes(getRecipes())
  );
}
