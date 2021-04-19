import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import useUserMedia from '../../hooks/use-user-media';
import useCardRatio from '../../hooks/use-card-ratio';

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
};

const DEFAULT_CARD_RATIO = 1.586;

const Camera = ({ onCapture, onClear }) => {
  const canvasRef = useRef();
  const videoRef = useRef();

  const [container, setContainer] = useState({ width: 0, heigth: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(DEFAULT_CARD_RATIO);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const handleResize = (contentRect) => {
    setContainer({
      width: contentRect.bounds.width,
      heigth: Math.round(contentRect.bounds.width / aspectRatio),
    });
  };

  const handleCanPlay = () => {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  };

  const handleCapture = () => {
    const context = canvasRef.current.getContext('2d');
    context.canvas.height = videoRef.current.clientHeight;
    context.drawImage(
      videoRef.current,
      0,
      0,
      container.width,
      container.heigth,
    );

    canvasRef.current.toBlob((blob) => onCapture(blob), 'imga/jpeg', 1);
    setIsCanvasEmpty(false);
  };

  const handleClear = () => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsCanvasEmpty(true);
    onClear();
  };

  if (!mediaStream) {
    return null;
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div>
          <div
            className="camera__container"
            ref={measureRef}
            height={videoRef.current && videoRef.current.videoHeight}
            width={videoRef.current && videoRef.current.videoWidth}
          >
            <video
              className="camera__video"
              ref={videoRef}
              hidden={!isVideoPlaying}
              onCanPlay={handleCanPlay}
              autoPlay
              playsInline
              muted
              width={container.width}
              heigth={container.heigth}
            />

            <div className="camera__overlay" hidden={!isVideoPlaying} />

            <canvas
              className="camera__canvas"
              ref={canvasRef}
              width={container.width}
            />
          </div>
          {isVideoPlaying && (
            <button
              className="camera__shot"
              type="button"
              onClick={isCanvasEmpty ? handleCapture : handleClear}
            >
              {isCanvasEmpty ? 'Take a picture' : 'Take another picture'}
            </button>
          )}
        </div>
      )}
    </Measure>
  );
};

Camera.propTypes = {
  onCapture: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Camera;
