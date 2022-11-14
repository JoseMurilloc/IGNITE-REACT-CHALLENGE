import { ActionTypes, Task } from './types'

export function taskReducer(state: Task[], action: any) {
  switch (action.type) {
    case ActionTypes.SET_TASKS: {
      return [...action.payload]
    }
    case ActionTypes.UPDATE_NEW_TASK:
      return [
        ...state.map((task: Task) =>
          task.id === action.payload.taskId ? action.payload.task : task,
        ),
      ]
    case ActionTypes.ADD_NEW_TASK:
      return [...state, action.payload.task]
    case ActionTypes.REMOVE_TASK:
      return [...state.filter((task) => task.id !== action.payload.taskId)]
    default:
      return state
  }
}
