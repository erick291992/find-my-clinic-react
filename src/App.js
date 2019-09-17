import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './container/Home'
import About from './container/About'
import Lawyer from './container/Lawyers'
import Results from './container/Results'
import Notfound from './container/Notfound'

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <div >
        <Switch>
          <Route exact path="/" component={Home} exact />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/lawyer" component={Lawyer} />
          <Route path="/results" component={Results} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
