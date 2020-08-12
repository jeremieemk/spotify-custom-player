export function fetchAlbums(albums) {
  return {
    type: "FETCH_ALBUMS",
    albums: albums,
  };
}
