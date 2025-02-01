
//import { useDispatch } from "react-redux";
import css from "./TrucksCart.module.css";

export const TrucksCart = ({ camper }) => {
  const picture = camper.gallery[0];
  
    return (
      <li key={camper.id}> <img       
      className={css.card}
      src={picture.original}
      alt={camper.name}
    /></li>
    );
};
  
{/* <img       
        className={css.card}
        src={camper.gallery[0].}
        alt={camper.name}
      /> */}