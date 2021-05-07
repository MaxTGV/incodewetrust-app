import { useDispatch, useSelector } from "react-redux";
import { getFavoriteQuote } from "../state/selectors";
import styled from "styled-components";
import remove from "../img/remove.svg";
import { useHistory } from "react-router";
import { Button } from "../shared/components/Button";
import { favoriteQuoteSlice } from "../state/favoriteQuoteSlice";

const FavoriteQuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0px;

  & p {
    width: 90%;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #1f1f33;
    text-align: center;
  }

  & img {
    cursor: pointer;
    width: 20px;
  }
`;

const QuoteItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 268px;
  height: 49px;
  margin: 0px 0px 27px 16px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  justify-content: space-around;
  align-items: center;
`;

export const FavoriteQuotesPage = () => {
  const favoriteQuoteList = useSelector(getFavoriteQuote);
  const history = useHistory();
  const dispatch = useDispatch();

  const removeQuote = (quote) => {
    return dispatch(favoriteQuoteSlice.actions.removeQuote(quote));
  };

  return (
    <FavoriteQuoteContainer>
      <QuoteContainer>
        {favoriteQuoteList &&
          favoriteQuoteList.map((quote) => (
            <QuoteItem key={quote.id}>
              <p>{quote.value}</p>
              <img
                onClick={() => removeQuote(quote)}
                src={remove}
                alt="remove"
              />
            </QuoteItem>
          ))}
      </QuoteContainer>
      <Button onClick={() => history.push("/")}>Back</Button>
    </FavoriteQuoteContainer>
  );
};
