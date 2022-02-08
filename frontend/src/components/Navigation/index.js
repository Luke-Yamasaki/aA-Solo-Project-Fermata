import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ul className="nav-list">
    <li className="home-item">
      <NavLink className="home-txt" exact to="/">Home</NavLink>
    </li>
    <li className="home-item">
      <Link className="home-txt" to='/discover'>Discover</Link>
    </li>
    <li className="home-item">
      <Link className="home-txt" to='/upload'>Upload</Link>
    </li>
    <li className="home-item">
      <ProfileButton className="home-txt" user={sessionUser}/>
    </li>
  </ul>
    );
  } else {
    sessionLinks = (
      <ul className="nav-list">
        <li className="home-item">
          <NavLink className="home-txt" exact to="/">Home</NavLink>
        </li>
        <li className="home-item">
          <Link className="home-txt" to='/discover'>Discover</Link>
        </li>
        <li className="home-item">
          <Link className="home-txt" to='/upload'>Upload</Link>
        </li>
        <li className="home-item">
          <ProfileButton className="home-txt"/>
        </li>
      </ul>
    );
  }

  return (
    <>
      {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;
