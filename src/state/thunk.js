import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuoteAPI } from "../api";

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  return await getQuoteAPI();
});
