import { createReducer, on } from '@ngrx/store';
import { LoginActions } from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

