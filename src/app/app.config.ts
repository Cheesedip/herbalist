import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';

import { environment } from '../environment/environment';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig =
  environment.environment === 'production'
    ? {
        providers: [
          provideZoneChangeDetection({ eventCoalescing: true }),
          provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
          provideFirestore(() => getFirestore()),
          provideAuth(() => getAuth()),
          provideRouter(routes),
          provideToastr(),
          provideAnimations(), // required animations providers
        ],
      }
    : {
        providers: [
          provideFirestore(() => getFirestore()),
          provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
          provideZoneChangeDetection({ eventCoalescing: true }),
          provideAuth(() => {
            const auth = getAuth();
            connectAuthEmulator(auth, 'http://localhost:9099'); // Connects to emulator
            return auth;
          }),
          provideRouter(routes),
          provideToastr(),
          provideAnimations(), // required animations providers
        ],
      };
