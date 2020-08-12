export const initialState = {
  albums: null,
};

export function spotifyDataReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALBUMS":
      console.log(state, action.albums);
      return { ...state, albums: action.albums };
    default:
      return state;
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
