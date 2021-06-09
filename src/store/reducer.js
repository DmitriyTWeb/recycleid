import { ActionType } from './action';

const initialState = {
  imgURL: '',
  predictions: [],
  error: '',
};

const extend = (a, b) => ({
  ...a,
  ...b,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IMAGE_URL:
      return extend(state, {
        imgURL: action.payload,
      });
    case ActionType.RESET_IMAGE:
      return extend(state, {
        imgURL: '',
      });
    case ActionType.SET_PREDICTIONS:
      return extend(state, {
        predictions: action.payload,
      });
    case ActionType.RESET_PREDICTIONS:
      console.log('resetPredctions reducer');
      return extend(state, {
        predictions: [],
      });
    case ActionType.SET_ERROR:
      return extend(state, {
        error: action.payload,
      });
    case ActionType.RESET_ERROR:
      return extend(state, {
        error: '',
      });
    default:
      return state;
  }
};

export default reducer;
