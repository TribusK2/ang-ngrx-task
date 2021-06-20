import { createReducer, on } from '@ngrx/store';

import { UserItems } from '../models/user-items.model';
import * as ListActions from './list.actions';

export const usersFeatureKey = 'users';

export interface State {
  items: UserItems[];
}

export const initialState: State = {
  items: undefined,
};

export const listReducer = createReducer(
  initialState,

  on(ListActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items
  }))
);

