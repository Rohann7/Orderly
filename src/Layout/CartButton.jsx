import styles from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/CartContent";
import { useContext } from "react";

const CartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Go to Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
