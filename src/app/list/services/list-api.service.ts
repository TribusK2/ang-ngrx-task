import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { ItemsResponse } from '../models/items-response.model';
import { UserItems } from '../models/user-items.model';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  constructor(private httpService: HttpClient) { }

  getItems(): Observable<UserItems[]> {
    return this.httpService.get<ItemsResponse>('assets/items.json').pipe(
      delay(1000), // To simulate request response time
      map(res => res.usersItems)
    );
  }
  
  addItem(): Observable<any> {
    return EMPTY.pipe(
      delay(1000)
    )
  }
}
