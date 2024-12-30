import { Component, signal, WritableSignal } from '@angular/core';
import { RecipeWithPlants } from '../../data/recipe/recipe';
import {
  addPlantsToRecipes,
  getRecipes,
} from '../../data/recipe/recipe.repository';
import { DisplayRecipesComponent } from '../display-recipes/display-recipes.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@Component({
  selector: 'app-concoction-catalog',
  imports: [DisplayRecipesComponent, SearchBarComponent],
  templateUrl: './concoction-catalog.component.html',
  styleUrl: './concoction-catalog.component.scss',
})
export class ConcoctionCatalogComponent {
  private allRecipes = addPlantsToRecipes(getRecipes());

  protected filteredRecipes: WritableSignal<RecipeWithPlants[]> = signal(
    this.allRecipes
  );

  protected filterRecipes(searchTerm: string) {
    const lower = searchTerm.toLowerCase();
    this.filteredRecipes.set(
      this.allRecipes.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(lower) ||
          recipe.effect.toLowerCase().includes(lower) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.plant.name.toLowerCase().includes(lower)
          )
      )
    );
  }
}
