import { createSlice } from "@reduxjs/toolkit";

export const favoriteQuoteSlice = createSlice({
  name: "favoriteQuote",
  initialState: { data: [] },
  reducers: {
    addQuote: (state, action) => {},
    removeQuote: (state, action) => {},
    clearQuoteList: (state, action) => {},
  },
});
