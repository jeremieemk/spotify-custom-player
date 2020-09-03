import React from "react";
import styled from "styled-components";
import { Heading } from "../globalStyles.js";

export default function Error(props) {
  return (
    <Container>
      <Heading className="error-message">
        Oops... it looks like you are not currently streaming any music from
        Spotify. Play a song on Spotify to launch this app.
      </Heading>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .error-message {
    width: 60%;
    background: lightgrey;
    padding: 1rem;
    text-align: center;
  }
`;
