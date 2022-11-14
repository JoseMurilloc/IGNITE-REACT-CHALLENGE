import { createContext, useContext, useReducer } from 'react'
import { taskReducer } from '../reducer/tasks/reducer'
import { TaskContextData, TaskContextProviderProps } from './types'

const TaskContext = createContext<TaskContextData>({} as TaskContextData)

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, dispatch] = useReducer(taskReducer, [])

  return (
    <TaskContext.Provider
      value={{
        dispatch,
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTask(): TaskContextData {
  const context = useContext(TaskContext)

  return context
}
