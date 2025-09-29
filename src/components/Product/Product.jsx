// import { useState } from "react";
// import classes from "./product.module.css";
// import { useEffect } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import Loader from "../../components/Loader/Loader";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get("https://fakestoreapi.com/products");
//         console.log(res);
//         setProducts(res.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.log("error", error);
//         setIsLoading(false);
//       }
//     })();
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className={classes.product_container}>
//           {products?.map((item) => (
//             <ProductCard singleproduct={item} key={item.id} />
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Product;
import { useState } from "react";
import classes from "./product.module.css";
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../../components/Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res);
        setProducts(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.product_container}>
<<<<<<< HEAD
          {products?.map((item, index) => (
            <ProductCard key={index} singleproduct={item} renderAdd={true} />
=======
          {products?.map((item) => (
            <ProductCard singleproduct={item} renderAdd={true} />
>>>>>>> 9dd882ac6a37ea391f567cf700ddc61cff2548ec
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
