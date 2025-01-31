
import { useDispatch } from "react-redux";
//import css from "./TrucksCart.module.css";

export const TrucksCart = ({ cart }) => {
    const dispatch = useDispatch();
    console.log({cart});
    
    return (
      <li>
        <img src={cart.gallery.thumb} />
        <div className="flex gap-4 items-center">
          <p>{cart.name}</p>
          {/* <button
            onClick={() => dispatch(addToCart(product))}
            className="btn btn-primary"
          >
            Add to cart
          </button> */}
        </div>
      </li>
    );
  };