import { useEffect, useState } from "react";
import {TrucksCart} from "../components/TrucksCart/TrucksCart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import { selectCampers } from "../redux/campers/selectors.js";
import css from './Catalog.module.css';


export const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);
  const data = useSelector(selectCampers);
  const user = data.items;
  
  // const [perPage] = useState(4);
  // const [page, setPage] = useState(1);
  
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  
  // const lastIndex = page * perPage;
  // const firstIndex = lastIndex - perPage;
  // const currentImage = user.slice(firstIndex, lastIndex);

  
  return (
    <div className={css.container} >
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
              camper ={item} />             
            );
          })}
        </ul>       
      {/* {query.length !== 0 && <LoadMoreBtn onSearchPage={onSearchPage} />} */}
    </div>
  );
}