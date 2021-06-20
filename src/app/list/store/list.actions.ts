import { createAction, props } from '@ngrx/store';

import { Item } from '../models/item.model';
import { UserItems } from '../models/user-items.model';

const actionsPrefix = '[List]';
export const loadItemsSuccess = createAction(`${actionsPrefix} Load Items Success`, props<{ items: UserItems[] }>());
export const addUserItem = createAction(`${actionsPrefix} Add user item`, props<{ itemsList: Item[], userId: number }>());




