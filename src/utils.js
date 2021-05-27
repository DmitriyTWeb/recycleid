export const extend = (a, b) => ({ ...a, ...b });

const loadModel = async () => {
  // Load the image model and setup the webcam
  const URL = './my_model/';
  const modelURL = `${URL}model.json`;
  const metadataURL = `${URL}metadata.json`;

  const model = await tmImage.load(modelURL, metadataURL);
  return model;
};

export const getPredictions = (imageURL) => {
  const IMAGE_DEFAULT_WIDTH = 640;
  const IMAGE_DEFAULT_HEIGHT = 480;

  const img = new Image();
  img.width = IMAGE_DEFAULT_WIDTH;
  img.height = IMAGE_DEFAULT_HEIGHT;

  return new Promise((resolve, reject) => {
    img.src = imageURL;
    img.onload = async () => {
      // eslint-disable-next-line no-undef
      const model = await loadModel();
      const predictions = await model.predict(img);
      if (predictions) resolve(predictions);
      else reject(new Error('something went wrong while predicions'));
    };
  });
};
