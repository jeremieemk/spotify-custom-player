import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Component() {
  const currentTrack = useSelector((state) => state.currentTrack);
  console.log(currentTrack);
  function addComa(i) {
    return (
      currentTrack.artists.length > 1 && i < currentTrack.artists.length - 1
    );
  }

  if (currentTrack) {
    return (
      <Container>
        <img src={currentTrack.album.images[0].url} alt="" />
        <h1>
          {currentTrack.artists.map((artist, i) => (
            <span>
              {artist.name}
              {addComa(i) && `, `}
            </span>
          ))}
        </h1>
        <h2>{currentTrack.name}</h2>
      </Container>
    );
  } else {
    return null;
  }
}

const Container = styled.div``;
