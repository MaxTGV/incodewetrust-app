export type QuoteType = {
  id: string;
  value: string;
};

export type Quote = {
    quote: { data: QuoteType };
    favoriteQuote: { data: QuoteType[] | null  };
  };
