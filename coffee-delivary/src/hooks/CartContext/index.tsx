import { createContext, useContext, useReducer } from 'react'
import { CoffeeDTO } from '../../dtos/Coffee'
import {
  addCoffeeCartAction,
  decrementCoffeeCartAction,
  incrementCoffeeCartAction,
  removeCoffeeCartAction,
  resetCartActions,
} from '../../reducers/actions'
import { cartReducer } from '../../reducers/reducer'
import { CartContextData, CartContextProviderProps } from './types'

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, { coffees: [] })

  function addCoffeeCart(coffee: CoffeeDTO) {
    dispatch(addCoffeeCartAction(coffee))
  }

  function removeCoffeeCart(idCoffee: number) {
    dispatch(removeCoffeeCartAction(idCoffee))
  }

  function incrementCoffeeCart(idCoffee: number) {
    dispatch(incrementCoffeeCartAction(idCoffee))
  }

  function decrementCoffeeCart(idCoffee: number) {
    dispatch(decrementCoffeeCartAction(idCoffee))
  }

  function resetCart() {
    dispatch(resetCartActions())
  }

  return (
    <CartContext.Provider
      value={{
        coffees: cart.coffees,
        addCoffeeCart,
        removeCoffeeCart,
        incrementCoffeeCart,
        decrementCoffeeCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
