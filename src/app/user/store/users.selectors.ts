import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export const selectUserstate = createFeatureSelector<fromUsers.State>(
  fromUsers.usersFeatureKey
);

// export const selectUsers = createSelector(
//   selectUserstate,
//   state => state.users,
// );

export const selectCurrentUser = createSelector(
  selectUserstate,
  state => state.users ? state.users.find(user => user.id === state.currentUserId) : undefined
);
