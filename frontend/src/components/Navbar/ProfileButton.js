import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="prf-user-button" onClick={openMenu}>
      </button>
      {showMenu && (
        <ul className="prf-profile-dropdown">
          <li className="prf-profile-items">Username:<p className="prf-item-text">{user.username}</p></li>
          <li className="prf-profile-items">Email:<p className="prf-item-text">{user.email}</p></li>
          <li className="prf-profile-items">Settings:<a href={`/users/${user.id}`} className="prf-settings-link">Change</a></li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
