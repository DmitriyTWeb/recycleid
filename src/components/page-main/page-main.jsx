/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

import OutputDesk from '../output-desk/output-desk';
import ClassDesk from '../class-desk/class-desk.tsx';
import ErrorScreen from '../error-screen/error-screen.tsx';

import Scan from '../scan/scan';

import Model from '../../assets/neuronet/Model';

const PageMain = ({ model }) => (
  <>
    <main className="page-main container">
      <div className="page-main__flex">
        <Scan />
        <div className="page-main__output">
          <OutputDesk model={model} />
          <ClassDesk />
        </div>

      </div>
    </main>
    <ErrorScreen />
  </>
);

PageMain.propTypes = {
  model: PropTypes.instanceOf(Model).isRequired,
};

export default PageMain;
