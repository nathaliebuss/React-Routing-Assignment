export const getImageURL = (imageParameter) => {
  return new URL(`../assets/Images/${imageParameter}`, import.meta.url).href; //will return the picture no matter the browser
};
