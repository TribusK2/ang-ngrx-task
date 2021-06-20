import {createAction, props} from '@ngrx/store';
import {User} from '../models/user.model';

const actionsPrefix = '[Users]';
export const loadUsers = createAction(`${actionsPrefix} Load Users`);
export const loadUserSuccess = createAction(`${actionsPrefix} Load Users Success`, props<{ users: User[] }>());
export const switchUser = createAction(`${actionsPrefix} Switch User`, props<{id: number}>());




