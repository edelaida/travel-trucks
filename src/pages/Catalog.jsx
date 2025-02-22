import {TrucksCart} from "../components/TrucksCart/TrucksCart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError, selectIsLoading } from "../redux/campers/selectors.js";
import css from './Catalog.module.css';

export const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectCampers);
  const user = data.items;
     
 return (
   <div className={css.container} >
     {isLoading && <h3>Loading....</h3>}
     {error && <h3>Error....</h3>}
      <section className={css.location} >
        <p className={css.lll} >Location</p>
        <p className={css.lmap} >Kyiv, Ukraine</p>
     
      <p className={css.namefiltr} >Filters</p>
        <h3 className={css.namevehicle} >Vehicle equipment</h3>
        <div className={css.btnsection} >
        <button className={css.btnequip}>AC</button>
      <button className={css.btnequip}>Automatic</button>
      <button className={css.btnequip}>kitchen</button>
      <button className={css.btnequip}>TV</button>
      <button className={css.btnequip}>bathroom</button> 
        </div> 
         <button className={css.btnsearch}>Search</button>
      </section>     
      <ul className={css.sectioncard}  >
        {user &&
          user.length > 0 &&
          user.map((item) => {
            return ( 
             <TrucksCart key={item.id}
              item ={item} />             
            );
          })}
        </ul>       
      </div>
  );
}