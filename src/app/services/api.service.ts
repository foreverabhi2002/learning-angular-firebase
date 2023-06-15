import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  firestore: Firestore = inject(Firestore);

  constructor() {}

  public async getProducts() {
    const colRef = collection(this.firestore, 'products');
    const snap = await getDocs(colRef);

    return snap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  }
}

// collection(this.firestore, 'products');
// const snaps = await getDocs(colRef);

// return snaps.docs.map((doc) => ({
//   ...doc.data(),
//   id: doc.id,
// }));
