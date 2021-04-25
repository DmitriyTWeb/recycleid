export const extend = (a, b) => Object.assign({}, a, b);

export const getPredictions = (imageURL) => {
  const IMAGE_DEFAULT_WIDTH = 640;
  const IMAGE_DEFAULT_HEIGHT = 480;

  const img = new Image();
  img.width = IMAGE_DEFAULT_WIDTH;
  img.height = IMAGE_DEFAULT_HEIGHT;

  return new Promise((resolve, reject) => {
    img.src = imageURL;
    img.onload = async () => {
      const model = await mobilenet.load();
      const predictions = await model.classify(img);
      if (predictions) resolve(predictions);
      else reject(new Error('something went wrong while predicions'));
    };
  });
};
