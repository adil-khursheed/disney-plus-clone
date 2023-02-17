// import axios from '../axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import requests from '../Requests';

const Home = () => {

  return (
    <Container>
      <ImageSlider fetchUrl={requests.fetchTrending} />
      <Viewers />
      <Movies title='Recommended for you' fetchUrl={requests.fetchTrending} />
      <Movies title='Disney+ Originals' fetchUrl={requests.fetchDisneyOriginals} />
      <Movies title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Movies title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Movies title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Movies title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Movies title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Movies title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  // padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  @media screen and (max-width: 780px){
    min-height: calc(100vh - 70px - 60px);
  }
`
