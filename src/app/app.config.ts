import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

import { environment } from '../environment/environment.production';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig =
  environment.environment === 'production'
    ? {
        providers: [
          provideZoneChangeDetection({ eventCoalescing: true }),
          provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
          provideFirestore(() => getFirestore()),
          provideAuth(() => getAuth()),
          provideRouter(routes),
        ],
      }
    : {
        providers: [
          provideZoneChangeDetection({ eventCoalescing: true }),
          provideRouter(routes),
        ],
      };
