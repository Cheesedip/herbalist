import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC9Nkb9IY_Xw4FrtYc0n9gIS-oFK837zpo',
  authDomain: 'dndprofessions.firebaseapp.com',
  projectId: 'dndprofessions',
  storageBucket: 'dndprofessions.firebasestorage.app',
  messagingSenderId: '1025477845666',
  appId: '1:1025477845666:web:7d50019f85426d7800adfb',
};

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
