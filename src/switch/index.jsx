import { Route, Switch } from 'react-router-dom';

import MovieGrid from '../components/MovieGrid';

export default () => (
  <>
    <Switch>
      <Route exact path="/">
        <MovieGrid />
      </Route>
      <Route path="/category/:cid">
        <MovieGrid />
      </Route>
      <Route path="/movie/:mid"></Route>
      <Route path="/questionnaire"></Route>
    </Switch>
  </>
);
