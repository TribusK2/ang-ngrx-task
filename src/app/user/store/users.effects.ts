import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadUsers, loadUserSuccess} from './users.actions';
import {map, switchMap} from 'rxjs/operators';
import {UserApiService} from '../services/user-api.service';


@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => this.userApiService.getUsers()),
    map((users) => loadUserSuccess({users})),
  ));

  constructor(
    private actions$: Actions,
    private userApiService: UserApiService
  ) {
  }

}
