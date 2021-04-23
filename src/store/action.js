export const ActionType = {
  SET_IMAGE_URL: 'SET_IMAGE_URL',
};

export const setImage = (imageURL) => ({
  type: ActionType.SET_IMAGE_URL,
  payload: imageURL,
});
