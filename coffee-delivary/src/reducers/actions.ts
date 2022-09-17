import { CoffeeDTO } from "../dtos/Coffee";
import { AddCoffeeCartParams } from "../hooks/CartContext/types";

export enum ActionTypes {
  ADD_COFFEE_CART = 'ADD_COFFEE_CART',
  REMOVE_COFFEE_CART = 'REMOVE_COFFEE_CART',
  INCREMENT_COFFEE_CART = 'INCREMENT_COFFEE_CART',
  DECREMENT_COFFEE_CART = 'DECREMENT_COFFEE_CART',
  RESET_CART = 'RESET_CART'
}

export function addCoffeeCartAction(coffee: CoffeeDTO) {
  return {
    type: ActionTypes.ADD_COFFEE_CART,
    payload: {
      ...coffee,
    },
  }
}

export function removeCoffeeCartAction(idCoffee: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_CART,
    payload: {
      idCoffee,
    },
  }
}

export function incrementCoffeeCartAction(idCoffee: number) {
  return {
    type: ActionTypes.INCREMENT_COFFEE_CART,
    payload: {
      idCoffee,
    },
  }
}

export function decrementCoffeeCartAction(idCoffee: number) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_CART,
    payload: {
      idCoffee,
    },
  }
}

export function resetCartActions() {
  return {
    type: ActionTypes.RESET_CART,
    payload: {},
  }
}
