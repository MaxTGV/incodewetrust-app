import { Button } from "../shared/components/Button";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../state/thunk";
import { favoriteQuoteSlice } from "../state/favoriteQuoteSlice";
import { getQuote } from "../state/selectors";

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonContainer = () => {
  const [isCliked, setIsCliked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const quote = useSelector(getQuote);

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
      <StyledButtonContainer>
        <Button onClick={() => showQuote()}>
          {isCliked ? "Stop" : "Show quote (3s)"}
        </Button>
        <Button onClick={() => favoriteQuote()}>
          {isFavorite ? "Remove favorite" : "Add favorite"}
        </Button>
        <Button onClick={() => history.push("/favorite")}>
          Go to the favorite list
        </Button>
        <Button onClick={() => clearAll()}>Delete all quotes</Button>
      </StyledButtonContainer>
    </>
  );
};
