import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';

export const selectListstate = createFeatureSelector<fromList.State>(
  fromList.listFeatureKey
);

export const selectItems = createSelector(
  selectListstate,
  state => state.items,
);
