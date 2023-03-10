import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
    selectUserName,
    selectUserPhoto,
    setSignOut,
    setUserLogin
} from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                navigate("/")
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }))
            navigate("/")
        })
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut());
                navigate("/login")
        })
    }

  return (
      <Navbar>
          <Nav>
              <Link to='/'>
                <Logo src='/images/logo.svg' alt='Disney+' />
              </Link>
              {
                  !userName ? (
                      <Login onClick={signIn}>Login</Login>) :
              <>
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
                          <UserImage
                              onClick={signOut}
                              src='https://images.thecompanycheck.com/directorimage/adil_khursheed_1065851.webp' />
              </>
              }
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

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
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
    cursor: pointer;

    @media screen and (max-width: 590px){
        width: 40px;
        height: 40px;
    }
`