import React, { useRef, useState } from 'react';
import { Measure } from 'react-measure';
import useUserMedia from '../../hooks/useUserMedia';
import useCardRatio from '../../hooks/useCardRatio';
import useOffssets from '../../hooks/useOffsets';
import {
  Video,
  Canvas,
  Wrapper,
  Container,
  Flash,
  Overlay,
  Button
} from '../../temp/styles';

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
};

const DEFAULT_CARD_RATIO = 1.586;

const Camera = ({ onCapture, onClear}) => {
  const canvasRef = useRef();
  const videoRef = useRef();

  const [container, setContainer] = useState({ width: 0, heigth: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);

  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(DEFAULT_CARD_RATIO);
  const offsets = useOffssets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.heigth,
  );

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

    context.drawImage(
      videoRef.current,
      offsets.x,
      offsets.y,
      container.width,
      container.heigth,
      0,
      0,
      container.width,
      container.heigth,
    );

    canvasRef.current.toBlob((blob) => onCapture(blob), 'imga/jpeg', 1);
    setIsCanvasEmpty(false);
    setIsFlashing(true);
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
        <Wrapper>
          <Container
            ref={measureRef}
            maxHeight={videoRef.current && videoRef.current.videoHeight}
            maxWidth={videoRef.current && videoRef.current.videoWidth}
            style={{
              height: `${container.height}px`
            }}
          >
            <Video
              ref={videoRef}
              hidden={!isVideoPlaying}
              onCanPlay={handleCanPlay}
              autoPlay
              playsInline
              muted
              style={{
                top: `-${offsets.y}px`,
                left: `-${offsets.x}px`
              }}
            />

            <Overlay hidden={!isVideoPlaying} />

            <Canvas
              ref={canvasRef}
              width={container.width}
              height={container.height}
            />

            <Flash
              flash={isFlashing}
              onAnimationEnd={() => setIsFlashing(false)}
            />
          </Container>

          {isVideoPlaying && (
            <Button onClick={isCanvasEmpty ? handleCapture : handleClear}>
              {isCanvasEmpty ? 'Take a picture' : 'Take another picture'}
            </Button>
          )}
        </Wrapper>
      )}
    </Measure>
  );
};

export default Camera;
