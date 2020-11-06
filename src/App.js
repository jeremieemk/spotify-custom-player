import React, { useEffect, useState }  from "react";
import useSongData from "./utilities/useSongData";
import useAccessToken from "./utilities/useAccessToken";

import NowPlaying from "./components/NowPlaying";
import LandingPage from "./components/LandingPage";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  // const accessToken = useAccessToken();
  const [accessToken, setAccessToken] = useState(null);
  const [
    songData,
    currentTrack,
    releaseIndex,
    errorMessage,
    skipReleaseIndex,
  ] = useSongData(accessToken);

  useEffect(() => {
    const token = window.location.hash.substr(1).split('&')[0].split("=")[1]
    if (token) {
      setAccessToken(token)
    }
  }, []); 

  function handleSignInClick() {
    
    const client_id = process.env.REACT_APP_SPOTIFY_KEY
    const redirect_uri = process.env.NODE_ENV === "production"
        ? "https://spotify-now-playing-discogs.netlify.app"
        : "http://localhost:3000" ;
    const scope = "streaming user-read-email user-read-private user-library-read user-read-playback-state user-modify-playback-state"
    window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`
  }

console.log(process.env.REACT_APP_SPOTIFY_KEY)
console.log(process.env.REACT_APP_DISCOGS_KEY)


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
