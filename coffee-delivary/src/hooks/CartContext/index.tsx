import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../../reducers/reducer";
import { CartContextData, CartContextProviderProps } from "./types";

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, {coffees: []})

  return (
    <CartContext.Provider value={{coffees: cart.coffees}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}