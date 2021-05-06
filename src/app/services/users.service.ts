import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  collectionName = `user`;
  constructor(private firestore: AngularFirestore) {}

  createUser(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  readUser() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  updateUser(record, recordID) {
    return this.firestore
      .doc(this.collectionName + `/` + recordID)
      .update(record);
  }

  deleteUser(record_id) {
    return this.firestore.doc(this.collectionName + `/` + record_id).delete();
  }
}
