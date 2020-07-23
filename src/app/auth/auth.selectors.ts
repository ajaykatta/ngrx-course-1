import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './reducers';

// export const isLoggedIn = createSelector(
//   (state) => state['auth'],
//   (auth) => !!auth.user
// );

// export const isLoggedOut = createSelector(
//   isLoggedIn,
//   (loggedIn) => !loggedIn
//   );

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
  );
