import { ActionType } from './action';

const initialState = {
  imgURL: '',
  predictions: [],
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
    case ActionType.SET_PREDICTIONS:
      return extend(state, {
        predictions: action.payload,
      });
    case ActionType.RESET_IMAGE:
      return extend(state, {
        imgURL: '',
      });
    default:
      return state;
  }
};

export default reducer;
