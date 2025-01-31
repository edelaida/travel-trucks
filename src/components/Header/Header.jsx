import { NavLink } from "react-router-dom";
import { HomePages } from "../../pages/HomePages.jsx";
import { Catalog } from "../../pages/Catalog.jsx";
import s from "./Header.module.css";
import clsx from "clsx";

export const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.wrapper}>
      <div>TravelTracks</div>
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to="*">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/">
          Campers
        </NavLink>
      </div>
    </div>
  );
};
