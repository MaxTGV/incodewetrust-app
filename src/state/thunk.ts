import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuoteAPI } from "../shared/api";
import { QuoteType } from "../type";

export const fetchQuote = createAsyncThunk<QuoteType>(
  "quote/fetchQuote",
  async () => {
    return await getQuoteAPI();
  }
);
