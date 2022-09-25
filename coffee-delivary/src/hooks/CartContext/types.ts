import React from 'react'
import { CoffeeDTO } from '../../dtos/Coffee'

export interface CartContextData {
  coffees: CoffeeDTO[]
  addCoffeeCart: (coffee: CoffeeDTO) => void
  removeCoffeeCart: (idCoffee: number) => void
  incrementCoffeeCart: (idCoffee: number) => void
  decrementCoffeeCart: (idCoffee: number) => void

  resetCart: () => void
}
export type AddCoffeeCartParams = {
  coffee: CoffeeDTO
}
export type CartContextProviderProps = {
  children: React.ReactNode
}

export type Cart = {
  coffees: CoffeeDTO[]
}
