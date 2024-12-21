import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlantsFirebaseService {
  firestore = inject(Firestore);
  todosCollection = collection(this.firestore, 'plants');

  getPlants(): Observable<any> {
    return collectionData<any>(this.todosCollection, {
      idField: 'id', // needed?
    });
  }
}
