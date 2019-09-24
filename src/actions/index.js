export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = item => {
  console.log(item)
  return {
    type: ADD_FEATURE,
    payload: item
  }
}