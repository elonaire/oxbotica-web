import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import VehicleDetails from './components/VehicleDetails';

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <Fragment>
        <Router>
        <div>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={VehicleDetails} path="/vehicle/:id" />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
