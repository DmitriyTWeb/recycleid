import React, { useState } from 'react';
import Camera from '../camera/camera';

const Scan = (props) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  const captureHandler = (blob) => {
    setCardImage(blob);
    const imageURL = URL.createObjectURL(blob);
    // setCurrentImage(imageURL);
  };

  const openCameraHandler = () => {
    setIsCameraOpen(true);
  };

  return (
    <section className="scan">
      {isCameraOpen && (
        <Camera
          onCapture={captureHandler}
          onClear={() => setCardImage(undefined)}
          isCameraOpen={isCameraOpen}
        />

      )}
      {/* <button type="button" style={{zIndex: '1010' }} onClick={openCameraHandler}>Open Camera</button> */}
      {/* {true && (
        <Camera
          onCapture={captureHandler}
          onClear={() => setCardImage(undefined)}
        />
      )} */}

      <button
        type="button"
        className="scan__shot-btn"
        onClick={openCameraHandler}
      >
        Сканировать
      </button>
    </section>
  );
};

export default Scan;
