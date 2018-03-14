import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FetchApps from './components/FetchApps';
import NoMatch from './components/NoMatch';
import image from './components/clouds.jpg'

const styles = {
  width: '100%',
  height: '1200px',
  background: 'url(' + image + ')',
  backgroundSize: 'cover',
}

const App = () => (
  <section style={ styles }>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/apps" component={FetchApps} />
      <Route component={NoMatch} />
    </Switch>
  </section>
)

export default App;
