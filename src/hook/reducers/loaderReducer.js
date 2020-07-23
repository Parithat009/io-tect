export const OPEN_LOADER = 'OPEN_LOADER'
export const CLOSE_LOADER = 'CLOSE_LOADER'

const openLoader = (state) => {
  return { ...state, status: true }
}

const closeLoader = (state) => {
  return { ...state, status: false }
}


export const loaderReducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case OPEN_LOADER:
      return openLoader(state)
    case CLOSE_LOADER:
      return closeLoader(state)
    default:
      return state
  }
}