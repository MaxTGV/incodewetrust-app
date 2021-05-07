import { Quote } from "../type";

export const getQuote = (state: Quote) => state.quote.data;

export const getFavoriteQuote = (state: Quote ) => state.favoriteQuote.data;
