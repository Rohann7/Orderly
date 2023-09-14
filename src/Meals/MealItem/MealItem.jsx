import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  const amount = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <div>
          <h3>{name}</h3>
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>{amount}</div>
        </div>
        <MealItemForm id={id}/>
      </div>
    </li>
  );
};

export default MealItem;
