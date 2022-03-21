import React from 'react';
import { Route, Switch } from 'react-router';
import { App as NasaApp} from 'app/containers/App';
import { Favorites } from 'app/components'
import { Header } from 'app/components';


export const App = () => (
  <>
    <Header title= "NASA APP" />
    <Switch>
      <Route exact path="/" component= { NasaApp } />
      <Route exact path="/favorites" component= { Favorites } />
    </Switch>
  </>

);