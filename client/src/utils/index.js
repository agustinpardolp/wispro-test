export const createActionTypes = (key, baseAction) => ({
  [`${baseAction}`]: `${key}/${baseAction}`,
  [`${baseAction}_REQUEST`]: `${key}/${baseAction}_REQUEST`,
  [`${baseAction}_SUCCESS`]: `${key}/${baseAction}_SUCCESS`,
  [`${baseAction}_FAILURE`]: `${key}/${baseAction}_FAILURE`,
});

export const errorsFormHandler = (errors) => {
  return Object.entries(errors).length > 0;
};
