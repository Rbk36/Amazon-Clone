import { useContext , useState} from "react";
import LayOut from "../../components/LayOut/LayOut";
import classes from "./payments.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
const Payments = () => {
  const [{ basket, user }] = useContext(DataContext);
  console.log(user);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
    const total = basket?.reduce((amount, item) => {
      return amount + item.price * item.amount;
    }, 0);

  const [cardError,setCardError]=useState(null)
  const stripe = useStripe();
  const elements = useElements();
  const handleChange=(e)=>{
console.log(e);
e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  }
  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>Checkout({totalItem}) items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123, Gullele street</div>
            <div>Addis Ababa</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, index) => (
              <div key={item.id ?? index}>
                <ProductCard
                  singleproduct={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{display:'flex'}}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payments;
