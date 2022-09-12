import { createContext, useContext, useReducer } from "react";
import { addCoffeeCartAction } from "../../reducers/actions";
import { cartReducer } from "../../reducers/reducer";
import { Coffee } from "../../reducers/types";
import { CartContextData, CartContextProviderProps } from "./types";

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, {coffees: []})

  function addCoffeeCart(data: Coffee) {
    dispatch(addCoffeeCartAction(data))
  }
 
  return (
    <CartContext.Provider value={{coffees: cart.coffees, addCoffeeCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}