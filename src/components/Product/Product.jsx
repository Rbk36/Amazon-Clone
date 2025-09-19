import { useState } from "react";
import classes from "./product.module.css";
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../../components/Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
=======

>>>>>>> 93e9c166c66638e420982fd05a881327d756334d
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res);
        setProducts(res.data);
<<<<<<< HEAD
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
=======
          setIsLoading(false);
      } catch (error) {
        console.log("error", error);
          setIsLoading(false);
>>>>>>> 93e9c166c66638e420982fd05a881327d756334d
      }
    })();
  }, []);

  return (
    <>
<<<<<<< HEAD
=======
    
>>>>>>> 93e9c166c66638e420982fd05a881327d756334d
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.product_container}>
          {products?.map((item) => (
<<<<<<< HEAD
            <ProductCard singleproduct={item} renderAdd={true} key={item.id} />
=======
            <ProductCard singleproduct={item} key={item.id} />
>>>>>>> 93e9c166c66638e420982fd05a881327d756334d
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
