import classes from "./ProductDetail.module.css";
import { useParams } from "react-router";
import LayOut from "../../components/LayOut/LayOut";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axios.js";
import ProductCard from "../../components/Product/ProductCard";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setproduct] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(`products/${productId}`);
        console.log(res.data);
        setproduct(res.data);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [productId]);
  console.log(product);
  if (product != {}) {
    return (
      <LayOut>
        <ProductCard singleproduct={product} />
      </LayOut>
    );
  }
};

export default ProductDetail;
