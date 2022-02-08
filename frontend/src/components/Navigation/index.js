import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Search from "../Search";
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <nav className="navbar">
         <ul className="nav-list">
            <li className="home-item">
              <NavLink className="home-txt" exact to="/">Fermata</NavLink>
            </li>
            <li className="home-item">
              <Link className="home-txt" to='/discover'>Discover</Link>
            </li>
            <li clasName="home-item">
              <Search />
            </li>
            <li className="home-item">
              <Link className="home-txt" to='/upload'>Upload</Link>
            </li>
            <li className="home-item">
              <ProfileButton className="home-txt" user={sessionUser}/>
            </li>
            <li className="home-item">
            <Link className="home-txt" to='/welcome'>Logout</Link>
            </li>
          </ul>
      </nav>
    );
  } else {
    sessionLinks = (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="home-item">
            <NavLink className="home-logo" exact to="/">Fermata</NavLink>
          </li>
          <li className="home-item">
            <Link className="home-txt" to='/discover'>Discover</Link>
          </li>
          <li clasName="home-item">
            <Search className="search"/>
          </li>
          <li className="home-item">
            <Link className="home-txt" to='/login'>Login</Link>
          </li>
          <li className="home-item">
            <Link className="home-txt" to='/signup'>Sign up</Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <>
      {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;
