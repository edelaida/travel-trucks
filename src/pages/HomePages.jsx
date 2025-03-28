import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

export const HomePages = () => {
  
    return (     
      <div className={css.presentation} >
        <h1 className={css.titlecamper} >Campers of your dreams</h1>
        <p className={css.catalog} >You can find everything you want in our catalog</p>
        <NavLink to='/campers' className={css.btnclick}>view now</ NavLink>
        </div>      
    );
  };
 

  