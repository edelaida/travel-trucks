import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import css from './Cart.module.css'
import { fetchItemsId } from '../redux/api.js'

export const Cart = () => {
  const {itemsId} = useParams();
  const [item, setItem] = useState(null);
  if (item != null) {
    const car1 = item.gallery[1];
    const car2 = item.gallery[2];
   }

  useEffect(() => {
    const getData = async () => {
      const data = await fetchItemsId(itemsId);
      setItem(data);
    };
    getData();
  }, [itemsId]);
        
  return (
    <div >
      <h3> CART</h3>
      <h4>{item.name} </h4>
      <p>{item.price} </p>
       <img className={css.card}
                src={car1.thumb}
                alt={item.name} />
        <img       
             className={css.card}
             src={car2.thumb}
             alt={item.name}
             />
    </div>
   
  );
};

// fetch(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
    //   .then(res => res.json())
    //   .then(data => setPost(data))   