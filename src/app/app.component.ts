import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { addPlants } from '../data/plant/plant.repository';
import { plants } from '../data/plant/plants';
import { addRecipes } from '../data/recipe/recipe.repository';
import { recipes } from '../data/recipe/recipes';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {
    //TODO: generate and add image URLs to plants
    // Add all data to the store
    addPlants(plants);
    addRecipes(recipes);
  }
}
