import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActions } from "../action-types";
// import { environment } from '../../environments/environment';

// tslint:disable-next-line: no-empty-interface
// export interface State {

// }

// export const reducers: ActionReducerMap<State> = {

// };

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    // state.user = action.user;
    // return state;
    // above two lines is mutating the state

    return {
      user: action.user,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);

// export const reducers: ActionReducerMap<AuthState> = {

// };

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// - example

// - function authReducer(state, action):AuthState{}

// - const courses = [];

// - courses.reduce()   -- signature is indentical
