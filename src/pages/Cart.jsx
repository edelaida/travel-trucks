import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import css from './Cart.module.css'
import { fetchItemsId } from '../redux/api.js'

export const Cart = () => {
  const {itemsId} = useParams();
  const [item, setItem] = useState(null);

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
      
      {post && (
        <> 
          <h4>{item.name} </h4>
          <p>{item.price} </p>
        </>
      )}
    </div>
   
  );
};

// fetch(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
    //   .then(res => res.json())
    //   .then(data => setPost(data))   