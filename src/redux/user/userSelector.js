import { createSelector } from "@reduxjs/toolkit";

const selectUser = (state) => state.user;
const selectIsSigningIn = (state) => state.user;
const selectIsError = (state) => state.user;
const selectIsSignUpDone = (state) => state.user;
const selectAdmin = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectIsLoading = createSelector(
  [selectIsSigningIn],
  (user) => user.isSigningIn
);

export const selectError = createSelector(
  [selectIsError],
  (user) => user.error
);

export const selectSignUpDone = createSelector(
  [selectIsSignUpDone],
  (user) => user.signUpDone
);

export const selectIsAdminAuthenticated = createSelector(
  [selectAdmin],
  (user) => user.isAdminAuthenticated
);
