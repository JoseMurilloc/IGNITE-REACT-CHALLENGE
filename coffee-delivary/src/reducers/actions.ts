import { Coffee } from './types'

export enum ActionTypes {
  ADD_COFFEE_CART = 'ADD_COFFEE_CART',
}

export function addCoffeeCartAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE_CART,
    payload: {
      newCoffee,
    },
  }
}
