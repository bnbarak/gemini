export default (state = { }, action) => {
  const { type } = action;
  if (type === '') {
    return { ...state };
  }
  return { ...state };
};
