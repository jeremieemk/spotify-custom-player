import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function AlbumsList(props) {
  const userAlbums = useSelector((state) => state.albums);
  console.log(userAlbums);
  return (
    <Container>
      {userAlbums &&
        userAlbums.map((a) => (
          <AlbumCover
            key={a.album.id}
            src={a.album.images[0].url}
            alt={a.album.name}
          />
        ))}
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
