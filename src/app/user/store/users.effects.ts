import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUserSuccess, switchUser } from './users.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserApiService } from '../services/user-api.service';
import { Store } from '@ngrx/store';


@Injectable()
export class UsersEffects {

  // loadUsers$ = createEffect(() => this.actions$.pipe(
  //   ofType(loadUsers),
  //   switchMap(() => this.userApiService.getUsers()),
  //   map((users) => loadUserSuccess({ users }))
  // ));

  constructor(
    private actions$: Actions,
    private userApiService: UserApiService,
  ) {
  }

}
