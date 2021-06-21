export const ActionType = {
  SET_IMAGE_URL: 'SET_IMAGE_URL',
  RESET_IMAGE: 'RESET_IMAGE',
  SET_PREDICTIONS: 'SET_PREDICTIONS',
  RESET_PREDICTIONS: 'RESET_PREDICTIONS',

  SET_ERROR: 'SET_ERROR',
  RESET_ERROR: 'RESET_ERROR',

  SET_ACTIVE_CLASS: 'SET_ACTIVE_CLASS',
  RESET_ACTIVE_CLASS: 'RESET_ACTIVE_CLASS',
  RESET_ALL: 'RESET_ALL',
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
  type: ActionType.RESET_ERROR,
});

export const setActiveClass = (activePredict) => ({
  type: ActionType.SET_ACTIVE_CLASS,
  payload: activePredict,
});
export const resetActiveClass = () => ({
  type: ActionType.RESET_ACTIVE_CLASS,
});
export const resetAll = () => ({
  type: ActionType.RESET_ALL,
});
