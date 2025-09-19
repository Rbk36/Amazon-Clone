import { Type } from "./action.type";
import { useReducer } from "react";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const itemExists = state.basket.find(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, amount: 1 }],
        };
      }

      const updatedBasket = state.basket.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );

      return {
        ...state,
        basket: updatedBasket,
      };
    }
    case Type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
        return {
          ...state,
          basket: newBasket,
        };
      }
      break;
    }

    default:
      return state;
  }
};
