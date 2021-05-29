import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PageHeader from '../page-header/page-header';
import PageMain from '../page-main/page-main';
import PageFooter from '../page-footer/page-footer';

import Model from '../../assets/neuronet/Model';

const model = new Model();
model.loadModel()
  .then(() => {
    // Обработать загрузку модели
  })
  .catch((exception) => {
    console.log(`Не удалось загрузить модель данных: \n `, exception);
  });

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <PageHeader />
        <PageMain model={model} />
        <PageFooter />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {};

export default App;
