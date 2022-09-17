import { ActionTypes } from './actions'
import { CartState } from './types'

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_CART:
      return {
        ...state,
        coffees: [...state.coffees, action.payload]
      }
      case ActionTypes.REMOVE_COFFEE_CART: {
        const removedCoffeeToCart = state.coffees.filter(coffee => coffee.id !== action.payload.idCoffee)
        console.log(removedCoffeeToCart)
        return {
          ...state,
          coffees: [...removedCoffeeToCart]
        }
      }
    default:
      return state
  }
}
