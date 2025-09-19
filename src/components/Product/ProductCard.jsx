
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router";
const ProductCard = ({ singleproduct }) => {
  const {image,title,rating,id,price}=singleproduct
  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={singleproduct?.image} alt="images" />
      </Link>
      <div>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.rating}>
          {/* 
        rating
        */}
          <Rating value={rating?.rate} precision={0.1} />

          {/* 
    counter
    */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;