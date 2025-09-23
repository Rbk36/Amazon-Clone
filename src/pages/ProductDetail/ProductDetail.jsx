import classes from "./productDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { axiosInstance } from "../../utils/axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const myUrl = "https://fakestoreapi.com";
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await axiosInstance.get(`${myUrl}/products/${productId}`);
        setProduct(res.data);
        setIsLoading(false);
        console.log(res.data);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    })();
  }, [productId]);

  return (
    <LayOut>
      {isLoading.product ? (
        <Loader />
      ) : (
        <>
          <h1 style={{ padding: "20px" }}>products</h1>
          <p style={{ padding: "20px", fontSize: "26px" }}>
            Product/{productId}
          </p>
          <hr />
          <div className={classes.product_container}>
            <ProductCard
              singleproduct={product}
              flex={true}
              renderDesc={true}
              renderAdd={true}
            />
          </div>{" "}
        </>
      )}
    </LayOut>
  );
};

export default ProductDetail;
