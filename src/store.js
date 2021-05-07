import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { favoriteQuoteSlice } from "./state/favoriteQuoteSlice";
import { quoteSlice } from "./state/quoteSlice";

const reducer = {
  jokes: quoteSlice.reducer,
  favoriteJokes: favoriteQuoteSlice.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
