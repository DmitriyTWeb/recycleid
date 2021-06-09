export const ActionType = {
  SET_IMAGE_URL: 'SET_IMAGE_URL',
  RESET_IMAGE: 'RESET_IMAGE',
  SET_PREDICTIONS: 'SET_PREDICTIONS',
  RESET_PREDICTIONS: 'RESET_PREDICTIONS',

  SET_ERROR: 'SET_ERROR',
  RESET_ERROR: 'RESET_ERROR',
};

export const setImage = (imageURL) => ({
  type: ActionType.SET_IMAGE_URL,
  payload: imageURL,
});
export const resetImage = () => ({
  type: ActionType.RESET_IMAGE,
});

export const setPredictions = (predictions) => ({
  type: ActionType.SET_PREDICTIONS,
  payload: predictions,
});
export const resetPredictions = () => ({
  type: ActionType.RESET_PREDICTIONS,
});

export const setError = (error) => ({
  type: ActionType.SET_ERROR,
  payload: error,
});
export const resetError = () => ({
  type: ActionType.SET_ERROR,
});
