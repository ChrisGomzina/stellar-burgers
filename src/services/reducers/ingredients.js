import { GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  COUNT_TOTAL_PRICE,
  SORT_INGREDIENTS,
  RESET_INGREDIENTS } from '../actions/ingredients.js';

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  addedBun: [],
  addedIngredients: [],
  totalPrice: 0,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredients: action.payload
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredients: [],
        ingredientsRequest: false,
        ingredientsFailed: true
      }
    } 
    case ADD_INGREDIENT: {
      return {
        ...state,
        addedIngredients: [
          ...state.addedIngredients,
          {
            ...state.ingredients.find((item) => item._id === action.payload.id),
            uuidv4: action.newId,
          },
        ],
      }
    }
    case ADD_BUN: {
      return {
        ...state,
        addedBun: state.ingredients.find((item) => item._id === action.payload.id),
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        addedIngredients: [
          ...state.addedIngredients.filter((item) => item.uuidv4 !== action.payload.uuidv4),
        ],
      }
    }
    case COUNT_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice:
          state.addedIngredients.reduce((acc, curr) => acc + curr.price, 0) + state.addedBun.price * 2,
      }
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        addedIngredients: action.payload
      }
    }
    case RESET_INGREDIENTS: {
      return {
        ...state,
        addedBun: [],
        addedIngredients: [],
        totalPrice: 0
      }
    }
    default: {
      return state;
    }
  }
};
