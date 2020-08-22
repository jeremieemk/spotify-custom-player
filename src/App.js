import React, { useEffect, useState } from "react";

import queryString from "query-string";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Discojs from "discojs";

import { getCurrentTrack } from "./actions/spotifyActions";
import NowPlaying from "./components/NowPlaying";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    setAccessToken(parsed.access_token);
  }, [window.location]);

  const client = new Discojs({
    userToken: "qICsaNYfZQFfkMlwfWDNOlCpmBXgdcWBgvsKjJhV",
  });

  useEffect(() => {
    if (accessToken) {
      fetchData();
    }
    client
      .searchDatabase({
        artist: "The Comet Is Coming",
        query: "Birth Of Creation",
        type: "master",
      })
      .then((data) => {
        console.log("discogs", data);
      })
      .catch((error) => {
        console.warn("Oops, something went wrong!", error);
      });

    client
      .getMaster(1517360)
      .then((data) => {
        console.log("release", data);
      })
      .catch((error) => {
        console.warn("Oops, something went wrong!", error);
      });

    client
      .getArtist(4764481)
      .then((data) => {
        console.log("artist", data);
      })
      .catch((error) => {
        console.warn("Oops, something went wrong!", error);
      });
  }, [accessToken]);

  function fetchData() {
    let apiUrl = "https://api.spotify.com/v1/me/player";
    fetch(apiUrl, {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(getCurrentTrack(data.item));
      })
      .catch(function (error) {
        // if there's an error, log it
        console.log(error);
      });
  }

  function handleSignInClick() {
    window.location = "http://localhost:8888/login";
  }
  return (
    <Container className="App">
      {!accessToken && (
        <Button onClick={handleSignInClick}>Sign in with Spotify</Button>
      )}
      {accessToken && (
        <div>
          <NowPlaying />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  background-color: rgb(29, 185, 84);
  color: rgb(255, 255, 255);
  font-family: Circular, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 12px;
  padding: 11px 32px;
  border-radius: 20px;
  cursor: pointer;
  margin: 2rem 0;
  &:hover {
    opacity: 0.8;
  }
`;

export default App;
