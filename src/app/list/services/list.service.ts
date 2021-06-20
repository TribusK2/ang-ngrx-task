import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NEVER, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { selectCurrentUser } from 'src/app/user/store/users.selectors';
import { UserItems } from '../models/user-items.model';
import { selectItems } from '../store/list.selectors';

@Injectable({
  providedIn: 'root'
})
export class ListService {

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
}
