import React from "react";
import styled from "styled-components";

export default function NowPlaying(props) {
  console.log("props", props);
  function addComa(i) {
    return (
      props.songData.spotifyTrackData.artists.length > 1 &&
      i < props.songData.spotifyTrackData.artists.length - 1
    );
  }

  if (props.songData) {
    console.log("ok");
    return (
      <Container>
        <img src={props.songData.spotifyTrackData.album.images[0].url} alt="" />
        <h1>
          {props.songData.spotifyTrackData.artists.map((artist, i) => (
            <span>
              {artist.name}
              {addComa(i) && `, `}
            </span>
          ))}
        </h1>
        <h2>"{props.songData.spotifyTrackData.name}"</h2>
        <h2>
          from the {props.songData.spotifyAlbumData.album_type} "
          {props.songData.spotifyAlbumData.name}"
        </h2>
        <h2>
          {props.songData.spotifyAlbumData.label} {"("}
          {props.songData.spotifyTrackData.album.release_date.substring(0, 4)}
          {")"}
        </h2>
      </Container>
    );
  } else {
    return null;
  }
}

const Container = styled.div``;
