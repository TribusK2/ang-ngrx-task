import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { loadUsers, switchUser } from '../store/users.actions';
import { selectCurrentUser, selectUsers } from '../store/users.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private store: Store,
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.store.select(selectUsers);
  }

  switchUser(id: number): void {
    this.store.dispatch(switchUser({id}));
  }

  getCurrentUser(): Observable<User> {
    return this.store.select(selectCurrentUser);
  }
}
