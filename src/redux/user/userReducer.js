import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isSigningIn: false,
    signUpDone: false,
    error: null,
  },
  reducers: {
    SignInSuccess: (state, action) => {
      state.isSigningIn = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    SignInFailure: (state, action) => {
      state.isSigningIn = false;
      state.error = action.payload;
    },
    emailSignInStart: (state, action) => {
      state.isSigningIn = true;
      state.error = null;
    },
    signUpStart: (state) => {
      state.error = null;
      state.isSigningIn = true;
    },
    signUpSuccess: (state, action) => {
      state.isSigningIn = false;
      state.signUpDone = true;
    },
    signUpFailure: (state, action) => {
      state.error = action.payload;
      state.isSigningIn = false;
    },
    signUpEnd: (state, action) => {
      state.signUpDone = false;
    },
    startSignOut: () => {},
    signOutSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutFailure: (state, action) => {
      console.log(action.payload);
    },
    adminAuthenticated: (state, action) => {
      state.isAdminAuthenticated = action.payload;
    },
    checkUserSession: (state, action) => {},
  },
});

export const {
  updateCurrentUser,
  emailSignInStart,
  SignInSuccess,
  SignInFailure,
  signUpStart,
  signUpSuccess,
  signUpEnd,
  signUpFailure,
  startSignOut,
  signOutSuccess,
  signOutFailure,
  checkUserSession,
  adminAuthenticated,
} = userSlice.actions;

export default userSlice.reducer;
