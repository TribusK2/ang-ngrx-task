import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Item } from '../../models/item.model';
import { ListService } from '../../services/list.service';
import { removeItem } from '../../store/list.actions';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit, OnDestroy {
  public userItems$: Subscription;
  public userItemsForm: FormGroup;
  public itemsList: Item[];
  public sortingColumn: string;
  private descendingDirection = false;
  private userId: number;

  constructor(
    private listService: ListService,
    private _formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.userItemsForm = this.initForm();
    this.userItems$ = this.listService.getUserItems().pipe(
      map(res => {
        this.userId = res?.userId;
        this.descendingDirection = false;
        this.sortingColumn = undefined;
        return res ? res.itemsList : [];
      }),
      tap(res => this.itemsList = [...res])
    ).subscribe();
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
      const newItem = <Item>this.userItemsForm.value;
      newItem.id = this.listService.lastItemId + 1; // 'id' should be solved by backend
      this.listService.incrementLastItemId();
      const newItemList = [...this.itemsList, newItem]
      this.listService.addUserItem(newItemList).subscribe();
      this.userItemsForm.reset();
      this.descendingDirection = false;
      this.sortingColumn = undefined;
    } else {
      this.userItemsForm.markAllAsTouched();
    }
  }

  sortItems(column: string): void {
    if (this.itemsList) {
      if (this.sortingColumn === column) {
        this.descendingDirection = !this.descendingDirection
      } else {
        this.descendingDirection = false;
      }
      this.sortingColumn = column;
      if (this.descendingDirection) {
        this.itemsList.sort((a, b) => (a[column] < b[column]) ? 1 : ((b[column] < a[column]) ? -1 : 0));
      } else {
        this.itemsList.sort((a, b) => (a[column] > b[column]) ? 1 : ((b[column] > a[column]) ? -1 : 0))
      }
    }
  }

  removeItem(item: Item): void {
    if (item.id) this.store.dispatch(removeItem({itemId: item.id, userId: this.userId}));
  }

  ngOnDestroy(): void {
    this.userItems$.unsubscribe();
  }

}
