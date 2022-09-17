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
        console.log({removedCoffeeToCart})
        return {
          ...state,
          coffees: [...removedCoffeeToCart]
        }
      }
      case ActionTypes.INCREMENT_COFFEE_CART: {
        const updatedCoffeeToCart = state.coffees.map(coffee => {
          if(coffee.id === action.payload.idCoffee) {
            return {
              ...coffee,
              amount: coffee.amount + 1
            }
          }
          return coffee
        })
        console.log(updatedCoffeeToCart)
        return {
          ...state,
          coffees: [...updatedCoffeeToCart]
        }
      }
      case ActionTypes.DECREMENT_COFFEE_CART: {
        const updateCoffeeToCart = state.coffees.map(coffee => {
          if(coffee.id === action.payload.idCoffee) {
            return {
              ...coffee,
              amount: coffee.amount - 1
            }
          }
          return coffee
        })
        console.log(updateCoffeeToCart)
        return {
          ...state,
          coffees: [...updateCoffeeToCart]
        }

      }
    default:
      return state
  }
}
