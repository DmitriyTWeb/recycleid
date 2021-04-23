import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PageHeader from '../page-header/page-header';
import PageMain from '../page-main/page-main';
import PageFooter from '../page-footer/page-footer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <PageHeader />
        <PageMain />
        <PageFooter />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {};

export default App;
