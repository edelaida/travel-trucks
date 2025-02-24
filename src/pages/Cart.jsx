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
   
  if (post) {
    console.log(post);   
    const imgData = post.gallery[1];
    const pictureImg = imgData.original
    console.log(imgData);
    console.log(pictureImg);    
  }
   
  return (        
      <div >
      <h3> CART</h3>
      {post && (
        <> 
        {/* <img className={css.cart}  src={imgData.original}
            alt={post.name} />   */}
          <h4>{post.name} </h4>
          <p>{post.price} </p>
        </>
      )}
      </div>
   
  );
}