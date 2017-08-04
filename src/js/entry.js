
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Choose from './components/Choose';
import Pokemon from './components/Pokemon';

/*This should not look very different from your create react app setup
All that has changed are the component names, Layout is now our wrapper instead of App
*/
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
        	<IndexRoute component={Choose}/>
        	<Route path="pokemon/:number" component={Pokemon}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));

