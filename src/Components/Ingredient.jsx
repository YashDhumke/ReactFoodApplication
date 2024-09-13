import styles from "./Ingredient.module.css";

function Ingredient({ ingredient }) {
  //   console.log(ingredient);
  return (
    <>
      <div className={styles.ingredientbox}>
        <div className={styles.ingredientname}>
          <h2>{ingredient.name}</h2>
        </div>
        <div className={styles.ingredientimg}>
          <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Ingredient;
