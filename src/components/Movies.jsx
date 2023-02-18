import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../axios';
import { Link } from 'react-router-dom';

const Movies = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    // console.log(movies);

  return (
      <Container>
          <h4>{title}</h4>
          <Content>
              {movies.map(movie => (
                  <Wrap key={movie.id}>
                      <Link to={`/detail/${movie.id}`}>
                        <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                      </Link>
                  </Wrap>
              ))}
          </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    margin-top: 20px;

    h4{
        padding: 0px calc(3.5vw + 5px);
        margin: 0;
    }

`

const Content = styled.div`
    display: flex;
    gap: 10px;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px 0;
    scrollbar-width: none;
    padding: 30px calc(3.5vw + 5px) 30px 0;
    margin-left: calc(3.5vw + 5px);

    &::-webkit-scrollbar{
        display: none;
    }
`

const Wrap = styled.div`

    max-height: 250px;
    min-width: 150px;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249,249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -10px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`