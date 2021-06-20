import { createAction, props } from '@ngrx/store';

import { UserItems } from '../models/user-items.model';

const actionsPrefix = '[List]';
export const loadItemsSuccess = createAction(`${actionsPrefix} Load Items Success`, props<{ items: UserItems[] }>());




