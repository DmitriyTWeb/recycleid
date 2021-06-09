import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PageHeader from '../page-header/page-header';
import PageMain from '../page-main/page-main';
import PageFooter from '../page-footer/page-footer';

import Model from '../../assets/neuronet/Model';

const model = new Model();
model.loadModel()
  .then(() => {
    // Фейковый вызов предсказания для ускорения последующих вызовов
    model.makeFakePredictions();
  })
  .catch((exception) => {
    // eslint-disable-next-line no-console
    console.log('Не удалось загрузить модель данных: \n ', exception);
  });

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <div className="app">
          <PageHeader />
          <PageMain model={model} />
          <PageFooter />
        </div>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {};

export default App;
