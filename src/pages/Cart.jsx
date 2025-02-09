import { useParams } from "react-router-dom";

export const Cart = () => {
    const { id } = useParams();
console.log(useParams());

  return (        
      <div >
        <h3> CART</h3>
      </div>
   
  );
}