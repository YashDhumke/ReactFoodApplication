import {
  SELECTED_FOOD_ITEM,
  SET_FOOD_ITEMS,
} from "../ActionTypes/foodActionTypes";

// defining the initial state for the food application

const initialState = {
  foodItems: [],
  foodDetail: {},
};

export const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.payload,
      };

    case SELECTED_FOOD_ITEM:
      return {
        ...state,
        foodDetail: action.payload,
      };

    default:
      return state;
  }
};
