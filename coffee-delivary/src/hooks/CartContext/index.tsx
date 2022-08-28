import { createContext, useContext, useReducer } from "react";
import { Cart, CartContextData, CartContextProviderProps } from "./types";

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cart, dispatch] = useReducer((state: Cart, action: any) => {
    return state
  }, {coffees: []})

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