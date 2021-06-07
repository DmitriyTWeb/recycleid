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

const Camera = ({ setSnapshotToStore }) => {
  const [videoRef, setVideoRef] = useState({ current: null });

  const callBackRef = useCallback((node) => {
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

  const captureHandler = (blob) => {
    const imgURL = URL.createObjectURL(blob);
    setSnapshotToStore(imgURL);
  };

  const handleCapture = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = videoRef.current.clientWidth;
    const height = videoRef.current.clientHeight;
    context.canvas.width = width;
    context.canvas.height = height;

    context.drawImage(
      videoRef.current,
      0,
      0,
      width,
      height,
    );

    canvas.toBlob(captureHandler, 'imga/jpeg', 1);
  };

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

      <button
        type="button"
        className="camera__shot-btn"
        onClick={handleCapture}
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
