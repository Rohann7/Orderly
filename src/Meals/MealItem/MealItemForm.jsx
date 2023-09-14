import Input from "../../Layout/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = ({id}) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
