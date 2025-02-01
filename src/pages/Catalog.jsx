import { useEffect, useState } from "react";
import {TrucksCart} from "../components/TrucksCart/TrucksCart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import { selectCampers } from "../redux/campers/selectors.js";


export const Catalog = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.campers.isLoading);
  // const error = useSelector((state) => state.campers.error);
  const data = useSelector(selectCampers);
  const user = data.items;
       
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  
  return (
    <div>
      <h2>Products</h2>  
     <ul className="grid grid-cols-3 gap-4">
    {user &&
      user.length > 0 &&
      user.map((camper) => {
    return (
      <TrucksCart
        key={camper.id}
        camper={camper}              
      />
    );
  })}
</ul>   
    </div>
  );
};

 

{/* <ul >
        { user &&
          user.length > 0 &&
          user.map((item) => {
            return (
              <li key={item.id}>
                {item.name} {item.location}
              </li>
            );          
        })}
    </ul>  */}