import classes from "./results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { axiosInstance } from "../../utils/axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
const Results = () => {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  const myUrl = "https://fakestoreapi.com/";
=======
  const myUrl = "https://fakestoreapi.com";

>>>>>>> 93e9c166c66638e420982fd05a881327d756334d
  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(
          `${myUrl}products/category/${categoryName}`
        );
        setResults(res.data);
        setIsLoading(false);
        console.log(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
<<<<<<< HEAD
        setIsLoading(false);
      }
    })();
  }, [categoryName]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <h1 style={{ padding: "20px" }}>Results</h1>
          <p style={{ padding: "20px", fontSize: "26px" }}>
            Category/{categoryName}
          </p>
          <hr />
          <div className={classes.product_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                singleproduct={product}
                renderAdd={true}
                renderDesc={false}
              />
            ))}
          </div>
        </>
      )}
    </LayOut>
  );
=======
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
>>>>>>> 93e9c166c66638e420982fd05a881327d756334d
};

export default Results;
