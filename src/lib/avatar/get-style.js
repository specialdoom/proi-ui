export const getStyle = (background, color, backgroundImage) => {
  if (backgroundImage !== '') {
    return `background: url(${backgroundImage}) center center/50px 50px no-repeat;`;
  }

  return `background: ${background}; color: ${color};`;
}