export const ADD_ITEM = "ADD_ITEM";

export const addItem = (newFeature) => {
  console.log(newFeature);
  return {
    type: ADD_ITEM,
    payload: newFeature,
  };
};

export const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItem = (feature) => {
  console.log(feature);
  return {
    type: REMOVE_ITEM,
    payload: feature,
  };
};
