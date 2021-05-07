import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { favoriteQuoteSlice } from "./state/favoriteQuoteSlice";
import { quoteSlice } from "./state/quoteSlice";

const reducer = {
  quote: quoteSlice.reducer,
  favoriteQuote: favoriteQuoteSlice.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
