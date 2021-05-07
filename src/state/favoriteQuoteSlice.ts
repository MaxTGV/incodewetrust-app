import { createSlice } from "@reduxjs/toolkit";
import { QuoteType } from "../type";

export const favoriteQuoteSlice = createSlice({
  name: "favoriteQuote",
  initialState: { data: JSON.parse(localStorage.getItem("favorite")!)},
  reducers: {
    addQuote: (state, action) => {
      if (state.data.length === 10) {
        const updateData = state.data.slice(1, 11);
        localStorage.setItem(
          "favorite",
          JSON.stringify([...updateData, action.payload])
        );
        return { data: [...updateData, action.payload] };
      }
      localStorage.setItem(
        "favorite",
        JSON.stringify([...state.data, action.payload])
      );
      return { data: [...state.data, action.payload] };
    },
    removeQuote: (state, action) => {
      const newFavoriteQuoteList = state.data.filter(
        (quote: QuoteType) => quote.id !== action.payload.id
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
