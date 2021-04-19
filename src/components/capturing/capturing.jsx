import React, { useState } from 'react';
import Camera from '../camera/camera';
import Preview from '../preview/preview';

const Capturing = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <>
      <section className="capturing">
        {isCameraOpen && (
          <Camera
            onCapture={(blob) => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <Preview blob={cardImage} />
        )}

        <div className="capturing__control-btn">
          <button type="button" onClick={() => setIsCameraOpen(true)}>Open Camera</button>
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

export default Capturing;
