import { ActionTypes, Task } from './types'

export function setTasksAction(tasks: Task[]) {
  console.log({ tasks })

  return {
    type: ActionTypes.SET_TASKS,
    payload: tasks,
  }
}

export function addTasksAction(task: Task) {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload: {
      task,
    },
  }
}

export function updateTasksAction(taskId: number, task: Task) {
  return {
    type: ActionTypes.UPDATE_NEW_TASK,
    payload: {
      taskId,
      task,
    },
  }
}

export function removeTaskAction(taskId: number) {
  return {
    type: ActionTypes.REMOVE_TASK,
    payload: {
      taskId,
    },
  }
}
