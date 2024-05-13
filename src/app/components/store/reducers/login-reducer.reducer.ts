import { createReducer, on } from '@ngrx/store';
import { login } from '../actions/login-action.actions';

export const initialState = { username: '', password: '', environment: '' };

export const loginReducer = createReducer(
  initialState,
  on(login, (state, { username, password, environment }) => ({ username, password, environment }))
);
