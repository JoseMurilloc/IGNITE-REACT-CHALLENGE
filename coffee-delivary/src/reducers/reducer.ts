import { produce } from 'immer'

import { ActionTypes } from './actions'
import { CartState } from './types'


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
