import { useEffect, useState } from "react";
import {TrucksCart} from "../components/TrucksCart/TrucksCart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export const Catalog = () => {
  const dispatch = useDispatch();
  //const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);
  const [carts, setCarts] = useState([]);
  //setCarts(res.data.campers);
  const filteredArray = useSelector(selectFilteredContacts);     
  
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  
  return (
    <div>
      <h2>Products</h2>    
      <ul className="grid grid-cols-3 gap-4">
      {Array.isArray(filteredArray) &&
          filteredArray.map((items) => {
            return (
              <Contact key={items.id} items={items} />
            );
          })}
      </ul>
    </div>
  );
};