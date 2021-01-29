export const addFeature = (item) => ({
  type: "ADD_FEATURE",
  payload: item,
});

export const removeFeature = (id) => ({
  type: "REMOVE_FEATURE",
  payload: id,
});
