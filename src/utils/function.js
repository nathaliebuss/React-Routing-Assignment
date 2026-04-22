export const getImageURL = (imageParameter) => {
  return new URL(`../assets/images/${imageParameter}`, import.meta.url).href; //will return the picture no matter the browser
};
