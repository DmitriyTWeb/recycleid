/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

import Capturing from '../capturing/capturing';
import OutputDesk from '../output-desk/output-desk';

import Scan from '../scan/scan';

import Model from '../../assets/neuronet/Model';

const PageMain = ({ model }) => (
  <main className="page-main container">
    <div className="page-main__row">
      <Scan />

      {/* <Capturing />
      <OutputDesk model={model} /> */}
    </div>
  </main>
);

PageMain.propTypes = {
  model: PropTypes.instanceOf(Model).isRequired,
};

export default PageMain;
