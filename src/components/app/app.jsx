import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

// import Container from "../container/container.jsx";
// import Capturing from "../capturing/capturing.jsx";
// import InputCanvas from "../input-canvas/input-canvas.jsx";
// import InfoTable from "../info-table/info-table.jsx";
// import OutputCanvas from "../outputCanvas/output-canvas.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          {/* <Container>
            <Capturing />
            <InputCanvas />
            <InfoTable />
            <OutputCanvas />
          </Container> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
