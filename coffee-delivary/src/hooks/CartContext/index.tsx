import { createContext, useContext, useReducer } from "react";
import { CoffeeDTO } from "../../dtos/Coffee";
import { addCoffeeCartAction, removeCoffeeCartAction } from "../../reducers/actions";
import { cartReducer } from "../../reducers/reducer";
import { CartContextData, CartContextProviderProps } from "./types";

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, {coffees: []})

  function addCoffeeCart(coffee: CoffeeDTO) {
    dispatch(addCoffeeCartAction(coffee))
  }

  function removeCoffeeCart(idCoffee: number) {
    dispatch(removeCoffeeCartAction(idCoffee))
  }

  return (
    <CartContext.Provider
      value={{
        coffees: cart.coffees,
        addCoffeeCart,
        removeCoffeeCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
