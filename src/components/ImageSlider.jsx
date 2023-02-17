import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import axios from '../axios';

const ImageSlider = ({ fetchUrl }) => {

    const [topMovies, setTopMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setTopMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    // console.log(movies);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }


  return (
      <Carousel {...settings}>
          {topMovies.map(movie => (
              <Wrap key={movie.id}>
                  <img src={`${base_url}${movie.backdrop_path}`} alt="" />
                <div>
                    <h2>{movie.title}</h2>
                </div>
              </Wrap>
          ))}
      </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 20px;
    padding: 0 calc(3.5vw + 5px);

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1;
    }

    @media screen and (max-width: 780px){
       margin-top: 80px;
    }

    @media screen and (max-width: 590px){
        ul li button{
            display: none;
        }
    }
`

const Wrap = styled.div`
    cursor: pointer;
    height: 480px;
    position: relative;

    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        opacity: 0.5;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }

    div{
        position: absolute;
        z-index: 1;
        bottom: 30px;
        left: 60px;

        h2{
            font-size: 30px;
            color: rgb(249, 249, 249);
            line-height: 1.4;
        }
    }


    @media screen and (max-width: 780px){
        height: 250px;

        div {
            bottom: 10px;
            left: 20px;

            h2{
                font-size: 17px;
            }
        }
    }
`