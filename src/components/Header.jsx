import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
      <Navbar>
          <Nav>
              <Logo src='/images/logo.svg' alt='Disney+' />
              <NavMenu>
                  <a>
                      <img src="/images/home-icon.svg" alt='icon' />
                      <span>HOME</span>
                  </a>
                  <a>
                      <img src="/images/search-icon.svg" alt='icon' />
                      <span>SEARCH</span>
                  </a>
                  <a>
                      <img src="/images/watchlist-icon.svg" alt='icon' />
                      <span>WATCHLIST</span>
                  </a>
                  <a>
                      <img src="/images/original-icon.svg" alt='icon' />
                      <span>ORIGINALS</span>
                  </a>
                  <a>
                      <img src="/images/movie-icon.svg" alt='icon' />
                      <span>MOVIES</span>
                  </a>
                  <a>
                      <img src="/images/series-icon.svg" alt='icon' />
                      <span>SERIES</span>
                  </a>
              </NavMenu>
              <UserImage src='https://images.thecompanycheck.com/directorimage/adil_khursheed_1065851.webp'/>
            </Nav>
      </Navbar>
  )
}

export default Header

const Navbar = styled.header`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;

    @media screen and (max-width: 780px){
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 999;
    }
`

const Nav = styled.nav`
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    gap: 12px;
    padding: 0 25px;

    a{
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: '';
                height: 2px;
                background: #ffffff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 780px){
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        justify-content: space-evenly;
        padding: 20px 0;
        background-color: #090b13;
        z-index: 999;
    }

    @media screen and (max-width: 590px){
        gap: 8px;
        padding: 12px 0;

        a{
            flex-direction: column;

            img{
                height: 25px;
            }

            span{
                font-size: 8px
            }
        }


    }
`

const UserImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;

    @media screen and (max-width: 590px){
        width: 40px;
        height: 40px;
    }
`