const ErrorMessage = {
  PREDICTION_FAIL: 'Predicting attemp failed',
  LOAD_MODEL_FAIL: 'Attempt to load the model failed',
};

const SuccessMessage = {
  MODEL_LOADED: 'Data model loaded',
};

const getModel = async () => {
  const URL = './assets/neuronet/datamodel/';
  const modelURL = `${URL}model.json`;
  const metadataURL = `${URL}metadata.json`;

  const model = await window.tmImage.load(modelURL, metadataURL);
  return model;
};
const sortPredictions = (predictions) => {
  return predictions.sort((first, second) => second.probability - first.probability);
};

export default class Model {
  constructor() {
    this.model = null;

    this.loadModel = this.loadModel.bind(this);
  }

  loadModel() {
    return new Promise((resolve, reject) => {
      getModel()
        .then((model) => {
          this.model = model;
          if (this.model) resolve(SuccessMessage.MODEL_LOADED);
          else reject(new Error(ErrorMessage.LOAD_MODEL_FAIL));
        })
        .catch((err) => reject(err));
    });
  }

  getPredictions(imageURL) {
    const IMAGE_DEFAULT_WIDTH = 640;
    const IMAGE_DEFAULT_HEIGHT = 480;

    const img = new Image();
    img.width = IMAGE_DEFAULT_WIDTH;
    img.height = IMAGE_DEFAULT_HEIGHT;

    return new Promise((resolve, reject) => {
      img.onload = async () => {
        if (!this.model) {
          await this.loadModel();
        }

        let predictions = await this.model.predict(img);
        predictions = sortPredictions(predictions);

        if (predictions) resolve(predictions);
        else reject(new Error(ErrorMessage.PREDICTION_FAIL));
      };
      img.src = imageURL;
    });
  }
}
