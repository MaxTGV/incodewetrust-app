import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuote } from "../api";

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  return await getQuote();
});
