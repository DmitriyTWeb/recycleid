import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PageHeader from '../page-header/page-header';
import PageMain from '../page-main/page-main';
import PageFooter from '../page-footer/page-footer';
import Camera from '../camera/camera';

// import Container from "../container/container.jsx";
// import Capturing from "../capturing/capturing.jsx";
// import InputCanvas from "../input-canvas/input-canvas.jsx";
// import InfoTable from "../info-table/info-table.jsx";
// import OutputCanvas from "../outputCanvas/output-canvas.jsx";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <PageHeader />
        <PageMain />
        <PageFooter />
        <Camera />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {};

export default App;
