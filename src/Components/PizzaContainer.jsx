import Pizza from "./Pizza";
import styles from "./PizzaContainer.module.css";
import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";

function PizzaContainer() {
  // by using selector we are getting the data of foodItems
  const itemData = useSelector((state) => state.food.foodItems);
  console.log(itemData);

  return itemData.length == 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className={styles.pizzacontainer}>
        {itemData.map((item) => (
          <Pizza item={item} />
        ))}
      </div>
    </>
  );
}

export default PizzaContainer;
