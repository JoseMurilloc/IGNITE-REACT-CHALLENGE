import React, { Dispatch } from "react"

export type CartContextData = {
  coffees: Coffee[]
  addCoffeeCart: (data: Coffee) => void
}

export type CartContextProviderProps = {
  children: React.ReactNode
}

export type Cart = {
  coffees: Coffee[]
}

type Coffee = {
  types: string[]
  title: string;
  description: string;
  price: number; 
  image: string;
}