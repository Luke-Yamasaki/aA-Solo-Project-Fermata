import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { logout } from "../../store/session";

function Navbar({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (sessionUser) {
      dispatch(logout());
    } else {
      history.push("/");
    }
  };

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <nav className="navbar">
         <ul className="nav-list">
            <li>
              <NavLink className="home-logo" exact to="/">Fermata</NavLink>
            </li>
            <li>
              <Link className="home-txt" to='/discover'>Discover</Link>
            </li>
            <li>
              <div className="searchbar">
                <div className="search-icon"></div>
                <form className="searchbar-form" action="search" metho="post">
                    <input className="search-input" type="search" spellCheck="on" autoCorrect="off" incremental="true" placeholder="Search Fermata" name="q" minLength="3" maxLength="255" autoComplete='on'>
                    </input>
                </form>
              </div>
            </li>
            <li>
              <Link className="home-txt" to='/upload'>Upload</Link>
            </li>
            <li>
              <ProfileButton className="home-txt" user={sessionUser}/>
              <div className="user-name-display">{sessionUser.username}</div>
            </li>
            <li>
              <Link className="home-txt" onClick={handleLogout} to='/login'>{sessionUser ? "Logout" : "Login"}</ Link>
            </li>
          </ul>
      </ nav>
    );
  } else {
    sessionLinks = (
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <NavLink className="home-logo" exact to="/">Fermata</NavLink>
          </li>
          <li>
            <Link className="home-txt" to='/discover'>Discover</Link>
          </li>
          <li className="home-item">
            <div className="searchbar">
              <div className="search-icon"></div>
              <form className="searchbar-form" action="search" metho="post">
                  <input className="search-input" type="search" spellCheck="on" autoCorrect="off" incremental="true" placeholder="Search Fermata" name="q" minLength="3" maxLength="255">
                  </input>
              </form>
            </div>
          </li>
          <li>
            <Link className="home-txt" to='/signup'>Sign up</Link>
          </li>
          <li>
            <Link className="home-txt" onClick={handleLogout} to="/login">{sessionUser ? "Logout" : "Login"}</ Link>
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

export default Navbar;
