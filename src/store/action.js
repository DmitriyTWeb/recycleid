export const ActionType = {
  SET_IMAGE_URL: 'SET_IMAGE_URL',
  SET_PREDICTIONS: 'SET_PREDICTIONS',
};

export const setImage = (imageURL) => ({
  type: ActionType.SET_IMAGE_URL,
  payload: imageURL,
});
export const setPredictions = (predictions) => ({
  type: ActionType.SET_PREDICTIONS,
  payload: predictions,
});
