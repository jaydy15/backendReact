import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/layout/Home';
import About from './components/layout/About';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
