import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "./state/selectors";
import { fetchQuote } from "./state/thunk";

export const App = () => {
  const [isCliked, setIsCliked] = useState(false);
  const dispatch = useDispatch();
  const quote = useSelector(getQuote);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isCliked) {
        dispatch(fetchQuote());
      }
      return;
    }, 3000);
    return () => clearInterval(timer);
  }, [isCliked, dispatch]);

  const showQuote = () => {
    setIsCliked(!isCliked);
  };

  return (
    <>
      <h1>Чак Норис челендж</h1>
      <button onClick={() => showQuote()}>{isCliked ? "Остановить показ" : "Показать цитату"}</button>
      {quote && <div>{quote}</div>}
    </>
  );
};
