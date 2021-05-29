/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

import Capturing from '../capturing/capturing';
import OutputDesk from '../output-desk/output-desk';

import Model from '../../assets/neuronet/Model';

const PageMain = ({ model }) => (
  <main className="page-main container">
    <p>This is page main block</p>
    <div className="page-main__row">
      <Capturing />
      <OutputDesk model={model} />
    </div>
  </main>
);

PageMain.propTypes = {
  model: PropTypes.instanceOf(Model).isRequired,
};

export default PageMain;
