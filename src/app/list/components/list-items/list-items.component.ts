import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  public userItems$: Observable<any>;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.userItems$ = this.listService.getUserItems().pipe(
      map(res => res ? res.itemsList : []),
    );
  }

}
