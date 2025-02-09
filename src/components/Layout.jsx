import { NavLink, Outlet } from "react-router-dom"
import css from "./Layout.module.css";

export const Layout = () => {
    return (
    <> 
      <section className={css.block}> 
      <span className={css.logo}>TravelTrucks</span>    
       <div className={css.nav} >
        <NavLink to='/' className={css.menu}>Home</NavLink>
        <NavLink to='/campers' className={css.menu}>Catalog</ NavLink>
       </div>
      </section> 
        <Outlet />          
    </>
    );
}

