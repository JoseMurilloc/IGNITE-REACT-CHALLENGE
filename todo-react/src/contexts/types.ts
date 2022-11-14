import React from 'react'
import { Task } from '../reducer/tasks/types'

export interface TaskContextData {
  tasks: Task[]
  dispatch: any
}

export type TaskContextProviderProps = {
  children: React.ReactNode
}
