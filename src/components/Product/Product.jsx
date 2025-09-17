import { useState } from "react";
import classes from "./product.module.css";
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res);
        setProducts(res.data);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div className={classes.product_container}>
      {products?.map((item) => (
        <ProductCard singleproduct={item} key={item.id} />
      ))}
    </div>
  );
};

export default Product;
