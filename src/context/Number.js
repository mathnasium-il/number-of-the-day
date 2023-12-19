import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 1,
};

export const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { reset, setNumber } = numberSlice.actions;
export default numberSlice.reducer;
