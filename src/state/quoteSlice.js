import { createSlice } from "@reduxjs/toolkit";
import { fetchQuote } from "./thunk";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: { data: "" },
  reducers: {},
  extraReducers: {
    [fetchQuote.fulfilled]: (state, action) => {
      state.quote = action.payload;
    },
  },
});
