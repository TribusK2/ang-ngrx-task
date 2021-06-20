import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { loadUsers, switchUser } from '../store/users.actions';
import { selectCurrentUser } from '../store/users.selectors';
import { UserApiService } from './user-api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private store: Store,
    private userApiService: UserApiService
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.userApiService.getUsers();
    // return this.store.select(selectUsers);
  }

  switchUser(id: number): void {
    this.store.dispatch(switchUser({id}));
  }

  getCurrentUser(): Observable<User> {
    return this.store.select(selectCurrentUser);
  }
}
