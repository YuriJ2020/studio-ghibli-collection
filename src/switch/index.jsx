import { Route, Switch } from 'react-router-dom';

import MovieGrid from '../components/MovieGrid';

const CustomSwitch = () => (
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

export default CustomSwitch;
