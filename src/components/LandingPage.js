import React from "react";
import styled from "styled-components";
import AlbumCover from "../img/dirty.jpg";
import { Button } from "../globalStyles.js";

export default function LandingPage(props) {
  return (
    <Container>
      <h1>
        <strong>NowPlaying</strong> brings you detailed information (credits,
        dates, cover art) about the songs you are currently streaming on
        Spotify.
      </h1>
      <img src={AlbumCover} alt="album-cover" />

      <Button onClick={props.handleSignInClick}>Log in to Spotify!</Button>
      <h2>
        (To use <strong>NowPlaying</strong>, you need to be currently playing
        music on your spotify app)
      </h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  width: 100%;
  img {
    height: 15rem;
    padding: 1rem;
  }
  h1 {
    font-family: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  strong {
    color: #e47de9;
  }
  h2 {
    font-size: 0.8rem;
    width: 15rem;
  }
`;
