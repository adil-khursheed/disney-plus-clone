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
`

const Nav = styled.nav`
    width: 100%;
    padding: 0 36px;
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
`

const UserImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
`