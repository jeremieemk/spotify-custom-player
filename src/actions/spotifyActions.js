export function getCurrentTrack(currentTrack) {
  return {
    type: "FETCH_CURRENT_TRACK",
    currentTrack: currentTrack,
  };
}
