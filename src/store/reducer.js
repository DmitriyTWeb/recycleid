import { ActionType } from './action';

const initialState = {
  detections: [],
  imgURL: null,
  hoveredUID: null,
  focusedArea: null,
};

const extend = (a, b) => Object.assign(...a, b);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_DETECTIONS:
      return extend(state, {
        detections: action.payload,
      });
    // case ActionType.SET_IMG_URL:
    //   return extend(state, {
    //     imgURL: action.payload,
    //   });
    // case ActionType.SET_CANVAS_SIZE:
    //   return extend(state, {
    //     size: action.payload,
    //   });
    // case ActionType.SET_HOVERED:
    //   return extend(state, {
    //     hoveredUID: action.payload,
    //   });
    // case ActionType.SET_FOCUSED_AREA:
    //   return extend(state, {
    //     focusedArea: action.payload,
    //   });
    default:
      return state;
  }
};

export default reducer;
