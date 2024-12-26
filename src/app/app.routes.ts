import { Routes } from '@angular/router';
import { PlantPageComponent } from './pages/plant-page/plant-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/login/sign-up-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { GatherHerbsComponent } from './gather-herbs/gather-herbs.component';
import { PlantCompendiumComponent } from './plant-compendium/plant-compendium.component';
import { ConcoctionCatalogComponent } from './concoction-catalog/concoction-catalog.component';

export const routes: Routes = [
  // App routes
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'plants/:plantId',
        component: PlantPageComponent,
      },
      {
        path: 'plants',
        component: PlantCompendiumComponent,
      },
      {
        path: 'gather',
        component: GatherHerbsComponent,
      },
      {
        path: 'recipes',
        component: ConcoctionCatalogComponent,
      },
    ],
  },

  // Login routes
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },

  // Wildcard route to catch undefined URLs
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
