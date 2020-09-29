export const isMobile = () => {
  const rect = document.body.getBoundingClientRect();
  return rect.width - 1 < 992;
};
