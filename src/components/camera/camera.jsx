/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setImage } from '../../store/action';
import useUserMedia from '../../hooks/use-user-media';

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
};

const getDrawingRectParams = (streamRect) => {
  const { width, height } = streamRect;
  let sx;
  let sy;
  let shortSide;

  if (height < width) {
    sx = Math.round((width - height) / 2);
    sy = 0;
    shortSide = height;
  } else if (height > width) {
    sx = 0;
    sy = Math.round((height - width) / 2);
    shortSide = width;
  } else {
    sx = 0;
    sy = 0;
    shortSide = width;
  }

  return {
    sx,
    sy,
    sWidth: shortSide,
    sHeight: shortSide,
    dx: 0,
    dy: 0,
    dWidth: shortSide,
    dHeight: shortSide,
  };
};

const getFilledCanvas = (mediaStream, videoRef) => {
  const { width, height } = mediaStream.getVideoTracks()[0].getSettings();
  const {
    sx,
    sy,
    sWidth,
    sHeight,
    dx,
    dy,
    dWidth,
    dHeight,
  } = getDrawingRectParams({ width, height });

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.canvas.width = sWidth;
  context.canvas.height = sWidth;

  context.drawImage(
    videoRef.current,
    sx,
    sy,
    sWidth,
    sHeight,
    dx,
    dy,
    dWidth,
    dHeight,
  );

  return canvas;
};

const Camera = ({ setSnapshotToStore }) => {
  const [videoRef, setVideoRef] = useState({ current: null });

  const callback = useCallback((node) => {
    setVideoRef({ current: node });
  }, []);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const handleCanPlay = () => {
    setIsVideoPlaying(true);
    videoRef.current.play();
  };

  const captureHandler = () => {
    const filledCanvas = getFilledCanvas(mediaStream, videoRef);
    const base64ImgURL = filledCanvas.toDataURL();
    setSnapshotToStore(base64ImgURL);
  };

  if (!mediaStream) {
    return null;
  }

  return (
    <div className="camera">
      <video
        className="camera__video"
        ref={callback}
        onCanPlay={handleCanPlay}
        autoPlay
        playsInline
        muted
        width="100px"
        heigth="100px"
      />

      <div className="camera__overlay" hidden={!isVideoPlaying} />

      <button
        type="button"
        className="camera__shot-btn"
        onClick={captureHandler}
      />
    </div>
  );
};

Camera.propTypes = {
  setSnapshotToStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setSnapshotToStore(imgURL) {
    return dispatch(setImage(imgURL));
  },
});

export { Camera };
export default connect(null, mapDispatchToProps)(Camera);
