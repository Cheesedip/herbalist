import { Routes } from '@angular/router';
import { IngredientPageComponent } from './pages/plant-page/ingredient-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GatherHerbsComponent } from './pages/gather-herbs/gather-herbs.component';
import { IngredientCompendiumComponent } from './pages/plant-compendium/ingredient-compendium.component';
import { ConcoctionCatalogComponent } from './pages/concoction-catalog/concoction-catalog.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignInCompletePageComponent } from './pages/sign-in-complete-page/sign-in-complete-page.component';

export const routes: Routes = [
  // App routes
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'ingredients/:ingredientId',
        component: IngredientPageComponent,
      },
      {
        path: 'ingredients',
        component: IngredientCompendiumComponent,
      },
      {
        path: 'gather',
        component: GatherHerbsComponent,
      },
      {
        path: 'recipes',
        component: ConcoctionCatalogComponent,
      },
      {
        path: 'recipes/:recipeId',
        component: RecipePageComponent,
      },
    ],
  },

  // Login routes
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'sign-in-complete',
    component: SignInCompletePageComponent,
  },

  // Wildcard route to catch undefined URLs
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
];
