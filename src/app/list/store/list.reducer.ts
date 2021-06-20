import { createReducer, on } from '@ngrx/store';

import { UserItems } from '../models/user-items.model';
import * as ListActions from './list.actions';

export const listFeatureKey = 'list';

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
  })),

  on(ListActions.addUserItem, (state, { itemsList, userId }) => ({
    ...state,
    items: (() => {
      let items = [...state.items];
      const updatedItemIndex = items.findIndex(item => item.userId === userId);
      items.splice(updatedItemIndex, 1, { userId, itemsList })
      return items;
    })()
  })),
);

