import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setError } from '../store/action';

const useUserMedia = (requestedMedia) => {
  const [mediaStream, setMediaStream] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      } catch (err) {
        dispatch(setError('Ошибка доступа к камере устройства'));
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia, dispatch]);

  return mediaStream;
};

export default useUserMedia;
