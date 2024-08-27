import { createSlice } from "@reduxjs/toolkit";

const withdrawalSlice = createSlice({
  name: "withdrawal",
  initialState: {
    withdrawal: "",
    isPaying: false,
    error: null,
  },
  reducers: {
    withdrawalSuccess: (state, action) => {
      state.isPaying = false;
      state.payment = action.payload;
    },
    withdrawalFailure: (state, action) => {
      state.isPaying = false;
      //   state.error = action.payload;
    },
    withdrawalStart: (state, action) => {
      state.isPaying = true;
      //   state.error = null;
    },
  },
});

export const { withdrawalStart, withdrawalFailure, withdrawalSuccess } =
  withdrawalSlice.actions;

export default withdrawalSlice.reducer;
