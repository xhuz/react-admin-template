export const bool = (str: any) => {
  if (str && str !== '0' && str !== 'false') {
    return true;
  } else {
    return false;
  }
};
