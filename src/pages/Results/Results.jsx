import classes from "./results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { axiosInstance } from "../../utils/axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";

const Results = () => {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const myUrl = "https://fakestoreapi.com";

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(
          `${myUrl}/products/category/${categoryName}`
        );
        setResults(res.data);
        console.log(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
                setIsLoading(false);

      }
    })();
  }, [categoryName]);
  if (results) {
    return (
      <LayOut>
        <h1 style={{ padding: "20px" }}>Results</h1>
        <p style={{ padding: "20px", fontSize: "26px" }}>
          Category/{categoryName}
        </p>
        <hr />
{isLoading ? (
        <Loader />
      ) : (        <div className={classes.product_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} singleproduct={product} />
          ))}
        </div>)}
      </LayOut>
    );
  }
};

export default Results;
