import {Action, createReducer, on} from '@ngrx/store';
import * as UsersActions from './users.actions';
import {User} from '../models/user.model';

export const usersFeatureKey = 'users';

export interface State {
  users: { [key: number]: User };
  currentUserId?: number;
}

export const initialState: State = {
  users: {
    1: {
      id: 1,
      name: 'User1'
    },
    2: {
      id: 2,
      name: 'User2'

    }
  },
  currentUserId: 1
};


export const reducer = createReducer(
  initialState,

  on(UsersActions.loadUserSuccess, (state, {users}) => ({
    ...state,
    users
  })),

  on(UsersActions.switchUser, (state, {id}) => ({
    ...state,
    currentUserId: id,
  }))
);

