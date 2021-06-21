import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Item } from '../../models/item.model';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  public userItems$: Observable<any>;
  public userItemsForm: FormGroup;
  private itemsList: Item[];

  constructor(
    private listService: ListService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userItemsForm = this.initForm();
    this.userItems$ = this.listService.getUserItems().pipe(
      map(res => res ? res.itemsList : []),
      tap(res => this.itemsList = res)
    );
  }

  initForm(): FormGroup {
    const initForm = this._formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
    return initForm;
  }

  addUserItem(): void {
    if (this.userItemsForm.valid) {
      const newItem = <Item>this.userItemsForm.value; // 'id' should be solved by backend
      const newItemList = [...this.itemsList, newItem]
      this.listService.addUserItem(newItemList).subscribe();
      this.userItemsForm.reset();
    } else {
      this.userItemsForm.markAllAsTouched();
    }
  }

}
