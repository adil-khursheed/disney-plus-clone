import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from '../axios';

const Detail = () => {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get();
          setMovieDetail(request.data.results);
          return request;
        }

        fetchData();
    }, []);

    // console.log(movieDetail);

  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
      </ImageTitle>
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
      <SubTitle>
        Lorem ipsum dolor sit amet consectetur.
      </SubTitle>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia recusandae voluptatibus aliquam? Dicta corrupti ullam soluta deleniti, vel dolor, nam tempore ipsum repellat excepturi officiis beatae magnam sit veritatis?
      </Description>
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
    // min-height: calc(100vh - 70px - 60px);
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
  }
`

const ImageTitle = styled.div`
  min-height: 170px;
  min-width: 200px;
  height: 30vh;
  width: 35vw;

  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
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

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 500px;

  @media screen and (max-width: 590px){
    font-size: 18px;
  }
`