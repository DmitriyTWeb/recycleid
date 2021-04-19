import React from 'react';
import Camera from '../camera/camera';

const PageMain = () => (
  <main className="page-main">
    <section className="capturing">
      <div className="container">
        <p>This is page main block</p>
        <Camera />
      </div>
    </section>
  </main>
);

export default PageMain;
