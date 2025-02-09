
//import { useDispatch } from "react-redux";
import css from "./TrucksCart.module.css";

export const TrucksCart = ({ camper }) => {
  const picture = camper.gallery[0];
  
  return ( 
      
    <li className={css.cartblock} key={camper.id}>
      <img       
      className={css.card}
      src={picture.original}
      alt={camper.name}
      />
      <section className={css.infocard} > 
        <div className={css.title} > 
          <h2 className={css.name} >{camper.name}</h2>
          <p className={css.price} > евро {camper.price} </p>
        </div>
        <p className={css.camerloc}>{camper.location} </p>
        <p className={css.descrip} >{camper.description} </p>
        <div className={css.blockbtn} > 
          <button className={css.btnfiltr}>{camper.transmission} </button>
          {camper.AC === true && <button className={css.btnfiltr}>AC</button>}
          {camper.bathroom === true && <button className={css.btnfiltr}>bathroom</button>}
          {camper.kitchen === true && <button className={css.btnfiltr}>kitchen</button>}
          {camper.kitchen === true && <button className={css.btnfiltr}>{camper.engine}</button>}
        </div>
        <button className={css.btnshow} >Show more</button>
      </section>
    </li> 
    );
};
  
{/* <img       
        className={css.card}
        src={camper.gallery[0].}
        alt={camper.name}
      /> */}