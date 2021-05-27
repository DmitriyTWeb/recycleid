import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setImage } from '../../store/action';
import Camera from '../camera/camera';
import Preview from '../preview/preview';

const Capturing = ({ setCurrentImage }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  const captureHandler = (blob) => {
    setCardImage(blob);
    const imageURL = URL.createObjectURL(blob);
    setCurrentImage(imageURL);
  };
  const openCameraHandler = () => {
    setIsCameraOpen(true);
    console.log('tap on \'openCamera\' button');
  };

  return (
    <>
      <section className="capturing">
        {isCameraOpen && (
          <Camera
            onCapture={captureHandler}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <Preview blob={cardImage} />
        )}

        <div className="capturing__control-btn">
          <button type="button" onClick={openCameraHandler}>Open Camera</button>
          <button
            type="button"
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
          >
            Close Camera
          </button>
        </div>
      </section>
    </>
  );
};

Capturing.propTypes = {
  setCurrentImage: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentImage(image) {
    dispatch(setImage(image));
  },
});

export { Capturing };
export default connect(null, mapDispatchToProps)(Capturing);
