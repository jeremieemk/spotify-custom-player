import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function AlbumsList(props) {
  const userAlbums = shuffle(useSelector((state) => state.albums));
  function shuffle(a) {
    if (a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }

  console.log(
    "test",
    useSelector((state) => state)
  );
  return (
    <Container>
      <>
        {!userAlbums && <h1>Loading...</h1>}
        {userAlbums &&
          userAlbums.map((a) => (
            <AlbumCover
              key={a.album.id}
              src={a.album.images[0].url}
              alt={a.album.name}
            />
          ))}
      </>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const AlbumCover = styled.img`
  width: 25%;
`;

export default AlbumsList;
