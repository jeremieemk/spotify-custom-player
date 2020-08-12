export const initialState = {
  albums: null,
};

export function spotifyReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALBUMS":
      console.log(state, action.albums);
      return { ...state, albums: action.albums };
    default:
      return state;
  }
}
