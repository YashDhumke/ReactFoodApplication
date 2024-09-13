import {
  SELECTED_FOOD_ITEM,
  SET_FOOD_ITEMS,
} from "../ActionTypes/foodActionTypes";

// action creators

export const setFoodItems = (foodItems) => {
  return {
    type: SET_FOOD_ITEMS,
    payload: foodItems,
  };
};

export const setFoodItem = (foodItem) => {
  return {
    type: SELECTED_FOOD_ITEM,
    payload: foodItem,
  };
};
