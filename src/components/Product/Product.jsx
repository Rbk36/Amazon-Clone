import { useState } from "react";
import classes from "./product.module.css";
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
const Product = () => {
  const [product, setProduct] = useState([]);

  //   const fetchData = async () => {
  //   useEffect(() => {
  //     axios
  //       .get("https://fakestoreapi.com/products")
  //       .then((res) => console.log(res), setProduct(res.data));
  //   }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res);
        setProduct(res.data);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div>
      {product?.map((item) => (
        <ProductCard singleproduct={item} key={item.id} />
      ))}
    </div>
  );
};

export default Product;
