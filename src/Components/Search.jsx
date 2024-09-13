import { useState } from "react";
import styles from "./Search.module.css";
import { useEffect } from "react";
import { setFoodItems } from "../redux/Actions/foodActions";
import { useDispatch } from "react-redux";
import JsonData from "../Utils/JsonData";

const apiURL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKEY = "1cc807e7231441e7914cfd196fcc1818";

function Search() {
  // state for the user input
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function queryFunction(e) {
    setQuery(e.target.value);
  }

  async function featchData() {
    // const jsonData = await fetch(
    //   `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=1cc807e7231441e7914cfd196fcc1818`
    // );
    // const data = await jsonData.json();
    // dispatch(setFoodItems(data.results));

    // by using dispatch hook we are setting the foodItems
    dispatch(setFoodItems(JsonData.results));
  }
  useEffect(() => {
    featchData();
  }, [query]);
  return (
    <>
      <div className={styles.searchbarcontainer}>
        <h3>Want to search a Recipe</h3>
        <h4>lets try !!</h4>
        <div className={styles.searchbar}>
          <input
            type="text"
            placeholder="Search Here .."
            value={query}
            onChange={(e) => queryFunction(e)}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
