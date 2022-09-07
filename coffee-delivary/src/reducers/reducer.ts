import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Coffee {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
}

interface CartState {
  coffees: Coffee[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_CART:
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.newCoffee)
      })
    default:
      return state
  }
}
