import { Reducer } from 'redux';
import { ActionType } from './action';

const initialState = {
  imgURL: '',
  predictions: [],
  error: '',
  activeClass: '',
};

const extend = (a: Object, b: Object) => ({
  ...a,
  ...b,
});

const reducer: Reducer = (state = initialState, action) => {
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
    case ActionType.SET_ACTIVE_CLASS:
      return extend(state, {
        activeClass: action.payload,
      });
    case ActionType.RESET_ACTIVE_CLASS:
      return extend(state, {
        activeClass: '',
      });
    case ActionType.RESET_ALL:
      return extend(state, {
        activeClass: '',
        error: '',
        predictions: [],
        imgURL: '',
      });
    default:
      return state;
  }
};

export default reducer;
