import { Link, Outlet } from "react-router-dom"
import css from "../components/Header/Header.module.css";
//import { Header } from "./Header/Header";

export const Layout = () => {
    return (
        <> 
            <section className={css.block}> 
            <span className={css.logo}>HEADER</span>    
     <div className={css.nav} >
        <Link to='/' className={css.menu}>Home</Link>
        <Link to='/campers' className={css.menu}>Catalog</ Link>
      </div>
        </section> 
            <Outlet />          
            </>
    );
}

