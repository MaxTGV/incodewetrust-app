import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuoteType } from "../type";
import { fetchQuote } from "./thunk";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: { data: {} as QuoteType },
  reducers: {},
  extraReducers: {
    [fetchQuote.fulfilled.toString()]: (state, action: PayloadAction<QuoteType>) => {
      state.data = action.payload;
    },
  },
});
