
//import { useDispatch } from "react-redux";
//import { Navigate, NavLink } from "react-router-dom";
import css from "./TrucksCart.module.css";
//import { Cart } from "../../pages/Cart";
import { Link } from "react-router-dom";

export const TrucksCart = ({item}) => {
  const picture = item.gallery[0];
  
return ( 
      
    <li className={css.cartblock} key={item.id}>
      <img       
      className={css.card}
      src={picture.thumb}
      alt={item.name}
      />
      <section className={css.infocard} > 
        <div className={css.title} > 
          <h2 className={css.name} >{item.name}</h2>
          <p className={css.price} > евро {item.price} </p>
        </div>
        <p className={css.camerloc}>{item.location} </p>
        <p className={css.descrip} >{item.description} </p>
        <div className={css.blockbtn} > 
          <button className={css.btnfiltr}>{item.transmission} </button>
          {item.AC === true && <button className={css.btnfiltr}>AC</button>}
          {item.bathroom === true && <button className={css.btnfiltr}>bathroom</button>}
          {item.kitchen === true && <button className={css.btnfiltr}>kitchen</button>}
          {item.kitchen === true && <button className={css.btnfiltr}>{item.engine}</button>}
        </div>        
        <Link  to={`/campers/${item.id}`} className={css.btnshow}>Show more</ Link>
        
      </section>
    </li> 
    );
};
  
{/* <img       
        className={css.card}
        src={camper.gallery[0].}
        alt={camper.name}
      /> */}