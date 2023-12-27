// Actions
import { logoutAction } from "../../redux/slices/authSlice";

// Libraries
import React from "react";
import { NavLink } from "react-router-dom";

// Store - Hooks
import { useAppDispatch } from "../../redux/store/hooks";

// Styles
import "./ProtectedLayout.scss";
import localStorageUtility from "../../utils/localstorage";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    localStorageUtility.removeItem('session')
    dispatch(logoutAction());
  };

  return (
    <div className="ProtectedLayout">
      <nav className="ProtectedLayout__navBar">
        <ul className="ProtectedLayout__navBar__menu">
          <li className="ProtectedLayout__navBar__item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " ProtectedLayout__navBar__item--active"
                  : " ProtectedLayout__navBar__item"
              }
              to="/home"
            >
              Inicio
            </NavLink>
          </li>
          <li className="ProtectedLayout__navBar__item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " ProtectedLayout__navBar__item--active"
                  : " ProtectedLayout__navBar__item"
              }
              to="/chat"
            >
              Chat
            </NavLink>
          </li>
        </ul>
        <ul className="ProtectedLayout__navBar__menu">
          <li className="ProtectedLayout__navBar__item">
            <button onClick={handleLogOut}>LOG OUT</button>
          </li>
        </ul>
      </nav>
      <div className="ProtectedLayout__content">{children}</div>
    </div>
  );
};

export default ProtectedLayout;
