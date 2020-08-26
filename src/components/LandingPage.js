import React from "react";
import styled from "styled-components";
import AlbumCover from "../img/dirty.jpg";

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

const Button = styled.div`
  background-color: rgb(229, 255, 240);
  border-radius: 12px;
  padding: 22.5px 40.5px;
  color: rgb(34, 34, 34);

  cursor: pointer;
  &:hover {
    background-color: rgb(245, 245, 245);
    box-shadow: rgb(34, 34, 34) 2px 2px 0px 0px;
  }
  font-family: medium;
  border: 2px solid black;
`;
