import { useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../Utils/RecipeDetail";
import styles from "./DetailInformation.module.css";
import Ingredient from "./Ingredient";
import { useDispatch, useSelector } from "react-redux";
import { setFoodItem } from "../redux/Actions/foodActions";
import ShimmerUI from "./ShimmerUI";

function DetailInformation() {
  let { id } = useParams();
  const dispatch = useDispatch();
  // https://api.spoonacular.com/recipes/658615/information?&apiKey=1cc807e7231441e7914cfd196fcc1818

  const detailRecipeData = useSelector((state) => state.food.foodDetail);
  console.log(detailRecipeData);

  const fetchRecipeDetail = async () => {
    // const detailRecipe = await fetch(
    //   `https://api.spoonacular.com/recipes/${id}/information?&apiKey=1cc807e7231441e7914cfd196fcc1818`
    // );
    // const jsondata = await detailRecipe.json();
    // dispatch(setFoodItem(jsondata));
    dispatch(setFoodItem(recipeData));
  };

  useEffect(() => {
    fetchRecipeDetail();
  }, [id]);

  return !detailRecipeData ? (
    <ShimmerUI />
  ) : (
    <>
      <div className={styles.detailcontainer}>
        <div className={styles.detailcontainerupper}>
          <div className={styles.detailimg}>
            <img src={detailRecipeData?.image} alt="" />
          </div>
          <div className={styles.detailtext}>
            <div className={styles.detailheading}>
              <h2>Recipe Name :{detailRecipeData?.title}</h2>
            </div>
            <div className="list">
              <ul>
                <li>
                  <h3>
                    Glutan-Free : {detailRecipeData?.glutenFree ? "Yes" : "No"}
                  </h3>
                </li>
                <li>
                  <h3>
                    vegiterian : {detailRecipeData?.vegetarian ? "Yes" : "No"}
                  </h3>
                </li>
                <li>
                  <h3>vegan : {detailRecipeData?.vegan ? "Yes" : "No"}</h3>
                </li>
                <li>
                  <h3>
                    sustainable : {detailRecipeData?.sustainable ? "Yes" : "No"}
                  </h3>
                </li>
                <li>
                  <h3>Health score : {detailRecipeData?.healthScore}</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.detailcontainerbottom}>
          <div className={styles.instructionheading}>
            <h2>Step By Step Instructions for the Recipe</h2>
          </div>
          {/* <div className={styles.instruction}>
            {detailRecipeData?.analyzedInstructions[0]?.steps?.map(
              (step, index) => (
                <li key={index}>{step.step}</li>
              )
            )}
          </div> */}

          <div className={styles.ingredients}>
            <div className={styles.heading}>
              <h1>List of Ingredients :</h1>
            </div>
            <div className={styles.ingredientcontainer}>
              {detailRecipeData?.extendedIngredients &&
                detailRecipeData?.extendedIngredients?.map(
                  (ingredient, key) => (
                    <Ingredient ingredient={ingredient} key={key} />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailInformation;
