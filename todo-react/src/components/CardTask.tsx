import styles from '../styles/components/cardTask.module.css'
import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { TaskService } from '../services/task'
import { removeTaskAction, updateTasksAction } from '../reducer/tasks/actions'
import { Task } from '../reducer/tasks/types'
import { useTask } from '../contexts/task'

type Props = {
  task: Task
}

export function CardTask({ task }: Props) {
  const { dispatch } = useTask()

  const handleDeleteTask = async (taskId: number) => {
    const { status } = await TaskService.deleteTask(taskId)

    if (!status) {
      return
    }

    dispatch(removeTaskAction(task.id))
  }

  const handleCompleteTask = async (taskId: number) => {
    const { status, updatedTask } = await TaskService.completeTask(
      taskId,
      task.complete,
    )

    if (!status) {
      return
    }

    dispatch(updateTasksAction(taskId, updatedTask))
  }

  return (
    <div className={styles.container}>
      <button onClick={() => handleCompleteTask(task.id)}>
        {task.complete ? (
          <CheckCircle color="#4EA8DE" size="2rem" />
        ) : (
          <Circle color="#4EA8DE" size="2rem" />
        )}
      </button>
      <div>
        <span>{task.title}</span>
      </div>
      <button onClick={() => handleDeleteTask(task.id)}>
        <Trash color="#808080" size="2rem" />
      </button>
    </div>
  )
}
