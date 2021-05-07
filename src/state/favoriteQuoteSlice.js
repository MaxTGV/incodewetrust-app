import { createSlice } from "@reduxjs/toolkit";

export const favoriteQuoteSlice = createSlice({
  name: "favoriteQuote",
  initialState: { data: [] },
  reducers: {
    addQuote: (state, action) => {
      return { data: [...state.data, action.payload] }; //state.data.push(action.payload);
    },
    removeQuote: (state, action) => {
      const newFavoriteQuoteList = state.data.filter(
        (quote) => quote.id !== action.payload.id
      );
      return {data: newFavoriteQuoteList};
    },
    clearQuoteList: (state, action) => {},
  },
});
