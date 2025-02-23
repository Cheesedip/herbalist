import { Routes } from '@angular/router';
import { IngredientPageComponent } from './pages/plant-page/ingredient-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/login/sign-up-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { GatherHerbsComponent } from './gather-herbs/gather-herbs.component';
import { IngredientCompendiumComponent } from './plant-compendium/ingredient-compendium.component';
import { ConcoctionCatalogComponent } from './concoction-catalog/concoction-catalog.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';

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
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },

  // Wildcard route to catch undefined URLs
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
