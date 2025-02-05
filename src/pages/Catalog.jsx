import { useEffect, useState } from "react";
import {TrucksCart} from "../components/TrucksCart/TrucksCart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import { selectCampers } from "../redux/campers/selectors.js";

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
    <div>
      <h2>Products</h2>
      <ul >
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