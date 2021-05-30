import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useUserMedia from '../../hooks/use-user-media';

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
};

// const DEFAULT_CARD_RATIO = 1.586;

const Camera = ({ onCapture, onClear, isCameraOpen }) => {
  const canvasRef = useRef();
  const [videoRef, setVideoRef] = useState({ current: null });

  const callBackRef = useCallback((node) => {
    setVideoRef({ current: node });
  }, []);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const handleCanPlay = () => {
    setIsVideoPlaying(true);
    videoRef.current.play();
  };

  // const handleCapture = () => {
  //   const context = canvasRef.current.getContext('2d');
  //   context.canvas.height = videoRef.current.clientHeight;
  //   context.drawImage(
  //     videoRef.current,
  //     0,
  //     0,
  //     container.width,
  //     container.heigth,
  //   );

  //   canvasRef.current.toBlob((blob) => onCapture(blob), 'imga/jpeg', 1);
  //   setIsCanvasEmpty(false);
  // };

  // const handleClear = () => {
  //   const context = canvasRef.current.getContext('2d');
  //   context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  //   setIsCanvasEmpty(true);
  //   onClear();
  // };

  if (!mediaStream) {
    return null;
  }

  return (
    <div className="camera">
      <video
        className="camera__video"
        ref={callBackRef}
        onCanPlay={handleCanPlay}
        autoPlay
        playsInline
        muted
        width="100px"
        heigth="100px"
      />

      <div className="camera__overlay" hidden={!isVideoPlaying} />

      {/* <canvas
        className="camera__canvas"
        ref={canvasRef}
        width={container.width}
      /> */}

      <button type="button" className="camera__shot-btn">.</button>
      {/* {isVideoPlaying && (
        <button
          className="camera__shot"
          type="button"
          onClick={isCanvasEmpty ? handleCapture : handleClear}
        >
          {isCanvasEmpty ? 'Take a picture' : 'Take another picture'}
        </button>
      )} */}

    </div>
  );
};

Camera.propTypes = {
  onCapture: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Camera;
