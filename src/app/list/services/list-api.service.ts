import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { ItemsResponse } from '../models/items-response.model';
import { UserItems } from '../models/user-items.model';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  constructor(
    private httpService: HttpClient,
    private listService: ListService
  ) { }

  getItems(): Observable<UserItems[]> {
    return this.httpService.get<ItemsResponse>('assets/items.json').pipe(
      delay(1000), // To simulate request response time
      map(res => {
        let maxItemsId = 0;
        for (const userItems of res.usersItems) {
          const maxId = Math.max(...userItems.itemsList.map(item => item.id), 0);
          if (maxId > maxItemsId) maxItemsId = maxId;
        }
        this.listService.lastItemId = maxItemsId;
        console.log(maxItemsId)
        return res.usersItems
      })
    );
  }

  addItem(): Observable<any> {
    return EMPTY.pipe(
      delay(1000)
    )
  }
}
