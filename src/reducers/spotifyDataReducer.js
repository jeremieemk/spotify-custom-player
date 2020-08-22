export const initialState = {
  currentTrack: null,
};

export function currentTrackReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CURRENT_TRACK":
      return { ...state, currentTrack: action.currentTrack };
    default:
      return state;
  }
}
