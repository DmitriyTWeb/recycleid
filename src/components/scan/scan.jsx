/* eslint-disable import/no-named-as-default */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Camera from '../camera/camera';
import Preview from '../preview/preview';

const Scan = ({ imgURL, errorMessage }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    setIsCameraOpen(false);
  }, [imgURL, errorMessage]);

  const openCameraHandler = () => {
    setIsCameraOpen(true);
  };

  return (
    <section className="scan">
      {isCameraOpen && <Camera />}

      { !imgURL
        && <button type="button" className="scan__shot-btn" onClick={openCameraHandler}>Сканировать</button> }

      { !isCameraOpen && imgURL
        && <Preview imgSrc={imgURL} cameraBtnClickHandler={setIsCameraOpen} /> }

    </section>
  );
};

Scan.propTypes = {
  imgURL: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  imgURL: state.imgURL,
  errorMessage: state.error,
});

export { Scan };
export default connect(mapStateToProps, null)(Scan);
