import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  sendEmailVerification,
} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => this.currentUserSubject.next(user));
  }

  public login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  public signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  public logout() {
    return signOut(this.auth);
  }

  public async signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      (credential) => {
        const user = credential.user;
        if (user) {
          return sendEmailVerification(user).then(() => {
            console.log('Verification email sent'); // TODO: toast?
          });
        } else {
          return Promise.reject(
            'Something went wrong trying to create an account'
          );
        }
      }
    );
  }
}
