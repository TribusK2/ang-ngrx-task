import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NEVER, Observable } from 'rxjs';
import { first, map, switchMap, tap } from 'rxjs/operators';

import { selectCurrentUser } from 'src/app/user/store/users.selectors';
import { Item } from '../models/item.model';
import { UserItems } from '../models/user-items.model';
import { addUserItem } from '../store/list.actions';
import { selectItems } from '../store/list.selectors';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public lastItemId: number; // Mocked Id instead of covered by backend

  constructor(private store: Store) { }

  getUserItems(): Observable<UserItems> {
    return this.store.select(selectCurrentUser).pipe(
      switchMap(res => {
        const currentUserId = res?.id;
        if (currentUserId) {
          return this.store.select(selectItems).pipe(
            map(res => {
              if (res) return res.find(user => user.userId === currentUserId)
            })
          )
        } else {
          return NEVER
        }
      })
    );
  }

  addUserItem(itemsList: Item[]): Observable<any> {
    return this.store.select(selectCurrentUser).pipe(
      first(),
      tap(res => {
        const currentUserId = res?.id;
        this.store.dispatch(addUserItem({ itemsList, userId: currentUserId }))
      })
    );
  }

  incrementLastItemId():void {
    this.lastItemId = this.lastItemId + 1;
  }
}
