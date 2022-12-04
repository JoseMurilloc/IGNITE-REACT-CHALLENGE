import { createContext, useContext, useReducer } from 'react'
import { removeTaskAction } from '../reducer/tasks/actions'
import { taskReducer } from '../reducer/tasks/reducer'
import { TaskContextData, TaskContextProviderProps } from './types'

const TaskContext = createContext<TaskContextData>({} as TaskContextData)

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, dispatch] = useReducer(taskReducer, [])

  function removeTask(taskId: number) {
    dispatch(removeTaskAction(taskId))
  }

  return (
    <TaskContext.Provider
      value={{
        dispatch,
        tasks,
        removeTask,
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
