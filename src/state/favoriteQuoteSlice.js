import { createSlice } from "@reduxjs/toolkit";

export const favoriteQuoteSlice = createSlice({
  name: "favoriteQuote",
  initialState: { data: JSON.parse(localStorage.getItem("favorite")) || [] },
  reducers: {
    addQuote: (state, action) => {
      localStorage.setItem(
        "favorite",
        JSON.stringify([...state.data, action.payload])
      );
      return { data: [...state.data, action.payload] };
    },
    removeQuote: (state, action) => {
      const newFavoriteQuoteList = state.data.filter(
        (quote) => quote.id !== action.payload.id
      );
      localStorage.setItem("favorite", JSON.stringify(newFavoriteQuoteList));
      return { data: newFavoriteQuoteList };
    },
    clearQuoteList: () => {
      localStorage.setItem("favorite", JSON.stringify([]));
      return { data: [] };
    },
  },
});
