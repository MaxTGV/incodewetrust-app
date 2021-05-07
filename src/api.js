export const getQuoteAPI = () => {
  return fetch(`https://api.chucknorris.io/jokes/random`)
    .then((res) => res.json())
    .then((data) => data.value);
};
