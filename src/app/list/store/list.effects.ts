import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { loadUsers } from 'src/app/user/store/users.actions';
import { ListApiService } from '../services/list-api.service';
import { addUserItem, loadItemsSuccess } from './list.actions';


@Injectable()
export class ListEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => this.listApiService.getItems()),
    map((items) => loadItemsSuccess({ items })),
  ));

  addUserItem$ = createEffect(() => this.actions$.pipe(
    ofType(addUserItem),
    switchMap(() => this.listApiService.addItem())
  ));

  constructor(
    private actions$: Actions,
    private listApiService: ListApiService,
  ) {
  }

}
