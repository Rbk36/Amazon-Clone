import LayOut from "../../components/LayOut/LayOut";
import classes from "./payments.module.css";
import { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
const Payments = () => {
  const [{ user, basket }] = useContext(DataContext);
  console.log(user.email);
  const totalItem = basket?.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);
  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>

          <div>
            <div>{user.email}</div>
            <div>123 gullele street</div>
            <div>Addis Ababa, Ethiopia</div>
          </div>
        </div>
        {/* product */}
        <div className={classes.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {basket?.map((item, index) => (
              <ProductCard key={index} singleproduct={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div>
            <div>
              <form action=""></form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payments;
