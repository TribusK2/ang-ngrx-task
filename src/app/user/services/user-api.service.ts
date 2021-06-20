import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { delay, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(
    private httpService: HttpClient,
    private store: Store
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.httpService.get<{ userList: User[] }>('assets/user.json').pipe(
      delay(1000), // To simulate request response time
      map(res => res.userList)
    );
  }
}
