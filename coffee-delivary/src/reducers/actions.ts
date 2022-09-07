import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_CART = 'ADD_COFFEE_CART',
}

export function addCoffeeCart(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE_CART,
    payload: {
      newCoffee,
    },
  }
}
