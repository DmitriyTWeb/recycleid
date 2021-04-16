export const ActionType = {
  SET_DETECTIONS: 'SET_DETECTIONS',
  SET_IMG_URL: 'SET_IMG_URL',
  SET_HOVERED: 'SET_HOVERED',
  SET_FOCUSED_AREA: 'SET_FOCUSED_AREA',
};

export const setDetections = (detections) => ({
  type: ActionType.SET_DETECTIONS,
  payload: detections,
});
export const setImgURL = (imgURL) => ({
  type: ActionType.SET_IMG_URL,
  payload: imgURL,
});
export const setHoveredUID = (uid) => ({
  type: ActionType.SET_HOVERED,
  payload: uid,
});
export const setFocusedArea = (imgData) => ({
  type: ActionType.SET_FOCUSED_AREA,
  payload: imgData,
});
