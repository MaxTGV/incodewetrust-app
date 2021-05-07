import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FavoriteQuotesPage } from "./FavoriteQuotesPage";
import { HomePage } from "./HomePage";

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/favorite">
            <FavoriteQuotesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
