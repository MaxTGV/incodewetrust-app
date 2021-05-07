export const getQuoteAPI = () => {
  return fetch(`https://api.chucknorris.io/jokes/random`)
    .then((res) => res.json())
    .then((data) => {
      return { id: data.id, value: data.value };
    });
};
