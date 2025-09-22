import LayOut from "../../components/LayOut/LayOut";
import ProductCard from "../../components/Product/ProductCard";
import { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import classes from "./cart.module.css";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router";
import { Type } from "../../utils/action.type";
const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket?.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);
  console.log(total);
  const increment = (item) => {
    dispatch({ type: Type.ADD_TO_BASKET, payload: item });
  };

  const decrement = (id) => {
    dispatch({ type: Type.REMOVE_FROM_BASKET, payload: id });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Your Shopping Basket is empty</p>
          ) : (
            basket?.map((item, index) => {
              return (
                <section>
                  <ProductCard
                    key={index}
                    singleproduct={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div>
                    <button onClick={() => increment(item)}>+</button>
                    <span className={classes.span}>{item.amount}</span>
                    <button onClick={() => decrement(item.payload.id)}>
                      -
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal : ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>you have a surprise gift for buying this product🎁</small>
            </span>
            <Link to="/payments">Proceed to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
