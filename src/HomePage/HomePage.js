import { useSelector } from "react-redux";
import styled from "styled-components";
import { ButtonContainer } from "./ButtonContainer";
import { getQuote } from "../state/selectors";

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 40px;
  color: #1f1f33;
  text-align: center;
  margin: 10px 0px;
`;

const QuoteContainer = styled.div`
  width: 100%;
  padding: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 40px;
  color: #1f1f33;
  text-align: center;
  border: 2px dotted black;
  border-radius: 10px;
`;

export const HomePage = () => {
  const quote = useSelector(getQuote);

  return (
    <>
      <Title>Чак Норис челендж</Title>
      <ButtonContainer />
      {quote && <QuoteContainer>{quote.value}</QuoteContainer>}
    </>
  );
};
