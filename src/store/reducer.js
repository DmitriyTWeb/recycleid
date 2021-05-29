import { ActionType } from './action';

const initialState = {
  imageURL: '',
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
        imageURL: action.payload,
      });
    case ActionType.SET_PREDICTIONS:
      return extend(state, {
        predictions: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
