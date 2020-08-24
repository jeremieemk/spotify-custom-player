import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function NowPlaying(props) {
  console.log("props", props);
  function addComa(i) {
    return (
      props.currentTrack.artists.length > 1 &&
      i < props.currentTrack.artists.length - 1
    );
  }

  if (props.currentTrack && props.spotifyApiAlbumData) {
    console.log("ok");
    return (
      <Container>
        <img src={props.currentTrack.album.images[0].url} alt="" />
        <h1>
          {props.currentTrack.artists.map((artist, i) => (
            <span>
              {artist.name}
              {addComa(i) && `, `}
            </span>
          ))}
        </h1>
        <h2>"{props.currentTrack.name}"</h2>
        <h2>
          from the {props.spotifyApiAlbumData.album_type} "
          {props.spotifyApiAlbumData.name}"
        </h2>
        <h2>
          {props.spotifyApiAlbumData.label} {"("}
          {props.currentTrack.album.release_date.substring(0, 4)}
          {")"}
        </h2>
      </Container>
    );
  } else {
    return null;
  }
}

const Container = styled.div``;
