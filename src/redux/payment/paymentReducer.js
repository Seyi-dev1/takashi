import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: "",
    isPaying: false,
    error: null,
  },
  reducers: {
    paymentSuccess: (state, action) => {
      state.isPaying = false;
      state.payment = action.payload;
    },
    paymentFailure: (state, action) => {
      state.isPaying = false;
      //   state.error = action.payload;
    },
    paymentStart: (state, action) => {
      state.isPaying = true;
      //   state.error = null;
    },
  },
});

export const { paymentStart, paymentFailure, paymentSuccess } =
  paymentSlice.actions;

export default paymentSlice.reducer;
