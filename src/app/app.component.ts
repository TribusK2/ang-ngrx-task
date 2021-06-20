import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from './user/services/user.service';
import { loadUsers } from './user/store/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: any[] = [
    'listItem1',
    'listItem2',
    'listItem3',
  ];

  constructor(
    public userService: UserService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
}
