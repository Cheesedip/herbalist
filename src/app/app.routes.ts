import { Routes } from '@angular/router';
import { PlantPageComponent } from './pages/plant-page/plant-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: 'plants/:plantId', component: PlantPageComponent },
  { path: '', component: HomePageComponent },
  // Wildcard route to catch undefined URLs
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
