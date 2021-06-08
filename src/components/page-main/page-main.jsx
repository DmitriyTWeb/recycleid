/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

import OutputDesk from '../output-desk/output-desk';
import ErrorScreen from '../error-screen/error-screen';

import Scan from '../scan/scan';

import Model from '../../assets/neuronet/Model';

const PageMain = ({ model }) => (
  <>
    <main className="page-main container">
      <div className="page-main__flex">
        <Scan />

        <OutputDesk model={model} />
      </div>
    </main>
    <ErrorScreen />
  </>
);

PageMain.propTypes = {
  model: PropTypes.instanceOf(Model).isRequired,
};

export default PageMain;
