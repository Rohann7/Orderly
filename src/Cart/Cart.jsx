import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = ({onHideCart}) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: "c1", name: "Sushi", quantity: 1, price: 9.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>9.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
