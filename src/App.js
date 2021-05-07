import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoriteQuoteSlice } from "./state/favoriteQuoteSlice";
import { getFavoriteQuote, getQuote } from "./state/selectors";
import { fetchQuote } from "./state/thunk";

export const App = () => {
  const [isCliked, setIsCliked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();
  const quote = useSelector(getQuote);
  const favoriteQuoteList = useSelector(getFavoriteQuote);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isCliked) {
        dispatch(fetchQuote());
        setIsFavorite(false);
      }
      return;
    }, 3000);
    return () => clearInterval(timer);
  }, [isCliked, dispatch]);

  const showQuote = () => {
    setIsCliked(!isCliked);
  };

  const favoriteQuote = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      return dispatch(favoriteQuoteSlice.actions.addQuote(quote));
    }
    return dispatch(favoriteQuoteSlice.actions.removeQuote(quote));
  };

  const clearAll = () => {
    setIsFavorite(false);
    dispatch(favoriteQuoteSlice.actions.clearQuoteList());
  };

  return (
    <>
      <h1>Чак Норис челендж</h1>
      <button onClick={() => showQuote()}>
        {isCliked ? "Остановить показ" : "Показать цитату"}
      </button>
      <button onClick={() => favoriteQuote()}>
        {isFavorite ? "Убрать из любимых" : "В любимые"}
      </button>
      <button onClick={() => clearAll()}>Удалить все</button>
      <div>------------------------</div>
      {quote && <div>{quote.value}</div>}
      <div>------------------------</div>
      {favoriteQuoteList &&
        favoriteQuoteList.map((quote) => <li key={quote.id}>{quote.value}</li>)}
    </>
  );
};
