// import { NavLink } from "react-router-dom";
// import { HomePages } from "../../pages/HomePages.jsx";
// import { Catalog } from "../../pages/Catalog.jsx";
import css from "./Header.module.css";
//import clsx from "clsx";

export const Header = () => {
  
  return (
    <header>      
      <div className={css.presentation} >
        <button className={css.btnclick} >view now</button>
      </div>
    </header>
  );
}
