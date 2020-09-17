import React from "react";
import useSongData from "./utilities/useSongData";
import useAccessToken from "./utilities/useAccessToken";

import NowPlaying from "./components/NowPlaying";
import LandingPage from "./components/LandingPage";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const accessToken = useAccessToken();
  const [
    songData,
    currentTrack,
    releaseIndex,
    errorMessage,
    skipReleaseIndex,
  ] = useSongData(accessToken);

  function handleSignInClick() {
    window.location =
      process.env.NODE_ENV === "production"
        ? "https://spotify-labels-backend.herokuapp.com/login"
        : "http://localhost:8888/login";
  }

  return (
    <div className="App">
      {!accessToken && <LandingPage handleSignInClick={handleSignInClick} />}
      {songData && (
        <div>
          <NowPlaying
            currentTrack={currentTrack}
            skipReleaseIndex={skipReleaseIndex}
            releaseIndex={releaseIndex}
            songData={songData}
          />
        </div>
      )}
      {accessToken && !songData && !errorMessage && (
        <div>
          <Loader />
        </div>
      )}
      {accessToken && errorMessage && <Error errorMessage={errorMessage} />}
    </div>
  );
}

export default App;
