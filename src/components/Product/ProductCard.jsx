import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
const ProductCard = ({ singleproduct }) => {
  const { img, title, price } = singleproduct;

  return (
    <div>
      <a href="">
        <img src={img} alt="" />
      </a>
      <div>
        <h3>{title}</h3>

        <div>
          {/* 
        rating
        */}
          <Rating defaultValue={5} precision={0.1} className={classes.rating} />
          {/* 
    counter
    */}
        </div>
        <div>{/* price */}</div>
      </div>
    </div>
  );
};

export default ProductCard;
