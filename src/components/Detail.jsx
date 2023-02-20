import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { FaStar } from 'react-icons/fa';

const Detail = () => {
  const { id } = useParams();

  const API_KEY = "a8488397d0e756fddfac67d9034397d2";

  const [movieDetail, setMovieDetail] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
      setMovieDetail(request.data);
      return request;
    }

    fetchData();
  }, [id]);

  // console.log(movieDetail);

  return (
    <Container>
      {movieDetail && (
        <>
          <Background>
            <img src={`${base_url}${movieDetail ? movieDetail.backdrop_path : ""}`} alt={movieDetail.original_title} />
          </Background>
          <FlexCol>
            <ImageTitle>
              <img src={`${base_url}${movieDetail ? movieDetail.poster_path : ""}`} alt={movieDetail.original_title} />
            </ImageTitle>
            <RightCol>
              <Title>
                <h1>{movieDetail ? movieDetail.original_title : ""}</h1>
              </Title>
              <Genre>
                {
                  movieDetail && movieDetail.genres
                ?
                  movieDetail.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))
                    : ""
                }
              </Genre>
              <Controls>
                <PlayButton>
                  <img src="/images/play-icon-black.png" alt="" />
                  <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                  <img src="/images/play-icon-white.png" alt="" />
                  <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                  <span>+</span>
                </AddButton>
                <GroupWatchButton>
                  <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
              </Controls>
              <Vote>
                <p>
                  {movieDetail ? Math.floor(movieDetail.vote_average) : ""}
                <span><FaStar size={12}/></span>
                </p>
                <p>{movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}</p>
              </Vote>
              <Runtime>
                <p>
                  {movieDetail ? movieDetail.runtime + " mins" : ""}
                </p>
              </Runtime>
              <SubTitle>
                <h2>Tagline: </h2>
                <p>{movieDetail ? movieDetail.tagline : ""}</p>
              </SubTitle>
              <Description>
                <h2>Overview</h2>
                <p>{movieDetail ? movieDetail.overview : ""}</p>
              </Description>
            </RightCol>
          </FlexCol>
        </>
      )}
    </Container>
  )
}

export default Detail

const Container = styled.div`
  // min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  margin-top: 70px;
  position: relative;

  @media screen and (max-width: 780px){
    padding-bottom: 70px;
  }
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    opacity: 0.7;
  }
`

const FlexCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  // min-height: calc(100vh - 70px);

  @media screen and (max-width: 780px){
    flex-direction: column;
    align-items: flex-start;
  }
`

const ImageTitle = styled.div`
  min-height: 170px;
  min-width: 280px;
  height: 100%;
  width: 50px;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 6px;
  }

  @media screen and (max-width: 780px){
    margin-top: 20px;
  }

  @media screen and (max-width: 590px){
    min-width: 150px;
  }
`

const RightCol = styled.div``

const Title = styled.div`
  h1{
    margin-top: 0;
    font-size: 32px;
  }

  @media screen and (max-width: 590px){
    h1{
      font-size: 24px;
    }
  }
`

const Genre = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p{
    border: 1px solid rgb(249, 249, 249);
    padding: 11px;
    border-radius: 50px;
    font-size: 10px;
    margin: 0 0 20px;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 590px){
    gap: 10px;
  }
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
    background: rgb(198, 198, 198);
  }

  @media screen and (max-width: 590px){
    font-size: 10px;
    paddding: 0 5px;
    height: 42px;

    img{
      height: 20px;
    }
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span{
    font-size: 18px;
    color: #fff;
  }

  @media screen and (max-width: 590px){
    width: 40px;
    height: 40px;


    span{
      font-size: 14px;
    }
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);

  img{
    width: 23px;
  }
`

const Vote = styled.div`
  display: flex;
  gap: 20px;

  p{
    display: flex;
    align-items: center;
    gap: 2px;
    margin: 20px 0 0;
  }
`

const Runtime = styled.div`
  p{
    margin: 10px 0 0;
  }
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  gap: 5px;

  h2, p{
    margin: 0;
  }

  h2{
    font-size: 17px;
  }

  p{
    font-size: 16px;
    font-style: italic;
  }
`

const Description = styled.div`
  margin-top: 10px;
  color: rgb(249, 249, 249);

  h2{
    margin: 0 0 10px;
    font-size: 20px;
  }

  p{
    margin-top: 0;
    font-size: 15px;
    line-height: 1.4;
  }
`