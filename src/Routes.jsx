import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Pages/Home';
import BeerList from './Pages/BeerList';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={['/', '/home']} component={Home} />
      <Route exact path="/beerlist" component={BeerList} />
    </Switch>
  </Router>
);

export default Routes;
