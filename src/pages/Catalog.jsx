import {TrucksCart} from "../components/TrucksCart/TrucksCart.jsx";
import { fetchItems } from "../redux/api.js";
import css from './Catalog.module.css';
import { useEffect, useState } from "react";

export const Catalog = () => {
  const [items, setItems] = useState([]);
   
  useEffect(() => {
    const getCatalog = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    getCatalog();
  }, []);
         
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
        {items.map(item => ( 
          <TrucksCart key={item.id} item ={item} />             
          )
       )}         
       </ul>        
    </div>
  );
};



{/* <ul className={css.sectioncard}  >
{items &&
  items.length > 0 &&
 items.map((item) => {
  return ( 
    <TrucksCart key={item.id}
     item ={item} />             
   );
 })}
</ul>         */}

{/* <ul className={css.sectioncard} >
        {items.map(item => (
          <li key={item.id}>
            <p>name {item.name}</p>
            <p>евро {item.price}</p>
          </li>
        ))}          
      </ul> */}

                  