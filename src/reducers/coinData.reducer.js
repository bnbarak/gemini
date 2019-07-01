export default (state = { test: 123 }, action) => {
  const { type } = action;
  if (type === '') {
    return { ...state };
  }
  return { ...state };
};
