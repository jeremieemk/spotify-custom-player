import React, { useEffect, useState } from "react";

import queryString from "query-string";
import styled from "styled-components";

import AlbumCover from "./img/dirty.jpg";
import NowPlaying from "./components/NowPlaying";
import { fetchCurrentTrack, fetchSongInfo } from "./utilities/fetchData";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [songData, setSongData] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [releaseIndex, setReleaseIndex] = useState(0);

  const currentTrackName = currentTrack && currentTrack.name;
  // extracts token from url
  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    setAccessToken(parsed.access_token);
  }, [window.location]);

  // gets current track info every 5 seconds
  useEffect(() => {
    if (accessToken) {
      fetchCurrentTrack(accessToken, setCurrentTrack);
      setInterval(() => {
        fetchCurrentTrack(accessToken, setCurrentTrack);
      }, 5000);
    }
  }, [accessToken]);

  // gets current track info every 5 seconds
  useEffect(() => {
    currentTrackName &&
      fetchSongInfo(
        accessToken,
        currentTrack,
        songData,
        setSongData,
        releaseIndex
      );
  }, [currentTrackName]);

  console.log(songData);

  function skipReleaseIndex() {
    releaseIndex < songData.releasesCount
      ? setReleaseIndex(releaseIndex + 1)
      : setReleaseIndex(0);
  }

  function handleSignInClick() {
    window.location = "http://localhost:8888/login";
  }
  return (
    <Container className="App">
      {!accessToken && (
        <>
          <h1>
            <strong>NowPlaying</strong> brings you detailed information
            (credits, dates, cover art) about the songs you are currently
            streaming on Spotify.
          </h1>
          <img src={AlbumCover} alt="album-cover" />

          <Button onClick={handleSignInClick}>Log in to Spotify!</Button>
          <h2>
            (To use <strong>NowPlaying</strong>, you need to be currently
            playing music on your spotify app)
          </h2>
        </>
      )}
      {songData && (
        <div>
          <NowPlaying
            currentTrack={currentTrack}
            skipReleaseIndex={skipReleaseIndex}
            songData={songData}
          />
        </div>
      )}
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

export default App;
