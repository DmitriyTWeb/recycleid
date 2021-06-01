import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default
import Camera from '../camera/camera';

const Scan = ({ imgURL }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  // const [cardImage, setCardImage] = useState();

  // const captureHandler = (blob) => {
  //   setCardImage(blob);
  //   const imageURL = URL.createObjectURL(blob);
  //   // setCurrentImage(imageURL);
  // };
  useEffect(() => {
    setIsCameraOpen(false);
  }, [imgURL]);

  const openCameraHandler = () => {
    setIsCameraOpen(true);
  };

  return (
    <section className="scan">
      {isCameraOpen && <Camera />}

      <button
        type="button"
        className="scan__shot-btn"
        onClick={openCameraHandler}
      >
        Сканировать
      </button>

      <img src={imgURL} alt="Фото объекта вторичной переработки" />
    </section>
  );
};

Scan.propTypes = {
  imgURL: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  imgURL: state.imgURL,
});

export { Scan };
export default connect(mapStateToProps, null)(Scan);
