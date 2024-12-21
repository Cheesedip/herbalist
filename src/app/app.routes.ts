import { Routes } from '@angular/router';
import { PlantPageComponent } from './pages/plant-page/plant-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/login/sign-up-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { AuthGuard } from '../guards/auth.guard';

export const routes: Routes = [
  // App routes
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'plants/:plantId',
    component: PlantPageComponent,
    canActivate: [AuthGuard],
  },

  // Login routes
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },

  // Wildcard route to catch undefined URLs
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
