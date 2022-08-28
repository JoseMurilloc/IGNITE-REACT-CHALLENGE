import React from "react"

export type CartContextData = {
  coffees: Coffee[]
}

export type CartContextProviderProps = {
  children: React.ReactNode
}

export type Cart = {
  coffees: Coffee[]
}

type Coffee = {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
}