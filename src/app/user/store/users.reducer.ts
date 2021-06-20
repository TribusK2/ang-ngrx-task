import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import { User } from '../models/user.model';

export const usersFeatureKey = 'users';

export interface State {
  users: User[];
  currentUserId?: number;
}

export const initialState: State = {
  users: undefined,
  currentUserId: undefined
};

export const reducer = createReducer(
  initialState,

  on(UsersActions.loadUserSuccess, (state, { users }) => ({
    ...state,
    users
  })),

  on(UsersActions.switchUser, (state, { id }) => ({
    ...state,
    currentUserId: id,
  }))
);

