export type Task = {
  id: number
  complete: boolean
  title: string
}

export enum ActionTypes {
  SET_TASKS = 'SET_TASKS',
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  UPDATE_NEW_TASK = 'UPDATE_NEW_TASK',
}
