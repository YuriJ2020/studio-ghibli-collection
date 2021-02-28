import { Route, Switch } from 'react-router-dom';

import MovieGrid from '../components/MovieGrid';

const CustomSwitch = () => (
  <>
    <Switch>
      {/* <Route exact path="/" render={MovieGrid} />
      <Route path="/category/:cid" render={MovieGrid} /> */}
      <Route exact path="/">
        <MovieGrid />
      </Route>
      <Route path="/category/:cid">
        <MovieGrid />
      </Route>
      <Route path="/movie/:mid" />
      <Route path="/questionnaire" />
    </Switch>
  </>
);

export default CustomSwitch;
