import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { AllRoutes } from './enum/allroutes.enum';

const App = () => {
  return (
    <Router>
      <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Route path={AllRoutes.REGISTER} component={Register} />
          <Route path={AllRoutes.LOGIN} component={Login} />
        </Switch>
      </section>
      </React.Fragment>
    </Router>
  );
}

export default App;
