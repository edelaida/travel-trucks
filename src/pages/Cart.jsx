import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './Cart.module.css'

export const Cart = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))     
  }, [id]);      
   
  // const dispatch = useDispatch()
  // const campers = useSelector(selectCampers);
  // console.log(campers);
  // const data = useSelector(selectCampersById);
  // console.log(data);
   
  return (        
      <div >
      <h3> CART</h3>
      {post && (
        <> 
         {/* <img className={css.cart}  src={car.original}
            alt={post.name} />  */}
          <h4>{post.name} </h4>
        </>
      )}
      </div>
   
  );
}