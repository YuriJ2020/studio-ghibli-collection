import { Redirect, Route, Switch } from "react-router-dom";

import MovieDetails from "../components/MovieDetails";
import MovieGrid from "../components/MovieGrid";
import NotFound from "../components/NotFound";
import Signup from "../components/Signup";

const CustomSwitch = () => (
  <>
    <Switch>
      <Route exact path="/">
        <MovieGrid />
      </Route>
      <Route path="/category/:cid">
        <MovieGrid />
      </Route>
      <Route path="/movie/:mid">
        <MovieDetails />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/notfound">
        <NotFound />
      </Route>
      <Route path="/">
        <Redirect to="/notfound" />
      </Route>
    </Switch>
  </>
);

export default CustomSwitch;
