import React from 'react';
import Capturing from '../capturing/capturing';
import Tensorflow from '../tensoflow/tensorflow';

const PageMain = () => (
  <main className="page-main container">
    <p>This is page main block</p>
    <div className="page-main__row">
      <Capturing />
      <Tensorflow />
    </div>
  </main>
);

export default PageMain;
