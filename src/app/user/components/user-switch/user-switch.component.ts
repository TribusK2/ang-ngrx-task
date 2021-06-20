import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-switch',
  templateUrl: './user-switch.component.html',
  styleUrls: ['./user-switch.component.scss']
})
export class UserSwitchComponent implements OnInit {
  users: User[];
  initSelection: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users) => {
        this.users = users
        this.initSelection = users[0].id
      });
  }

  selectUser(id: string): void {
    const idNumber = Number(id);
    this.userService.switchUser(idNumber);
  }
}
