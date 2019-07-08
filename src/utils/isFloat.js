// https://stackoverflow.com/questions/12467542/how-can-i-check-if-a-string-is-a-float
// TODO: rename to isNumberOrFloat
export default (val) => {
  const floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
  if (!floatRegex.test(val)) return false;

  const float = parseFloat(val);
  if (Number.isNaN(float)) return false;
  return true;
};
