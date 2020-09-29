export const getQueryString = (
  name: string,
  url: string = location.search || location.hash
) => {
  const reg = new RegExp(`(?:^|&)${name}=([^&]*)(?=&|$)`);
  const index = url.indexOf('?');
  if (index === -1) {
    return '';
  }
  url = url.substring(index + 1);
  const match = url.match(reg);
  if (match?.[1]) {
    return decodeURIComponent(match[1]);
  } else {
    return '';
  }
};
