import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private httpService: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpService.get<{ userList: User[] }>('assets/user.json').pipe(
      delay(1000), // To simulate request response time
      map(res => res.userList)
    );
  }
}
