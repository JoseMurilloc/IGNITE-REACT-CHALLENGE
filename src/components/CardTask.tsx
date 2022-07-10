import styles from '../styles/components/cardTask.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';
import { TaskService } from '../services/task';
import { Task } from '../pages/App';


type Props = {
  task: Task;
  onTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function CardTask ({task, onTasks}: Props) {

  const handleDeleteTask = async (taskId: number) => {
    const {status} = await TaskService.deleteTask(taskId);

    if (!status) {
      return;
    }

    onTasks((oldTasks: Task[]) => oldTasks.filter(task => task.id !== taskId))
  }

  const handleCompleteTask = async (taskId: number) => {
    const {status, updatedTask} = await TaskService.completeTask(taskId, task.complete);

    if (!status) {
      return;
    }

    onTasks((oldTasks: Task[]) => oldTasks.map(task => 
        task.id === taskId ?
          updatedTask : task
    ))
  }

  return (
    <div className={styles.container}>
      {task.complete 
        ? (
          <button onClick={() => handleCompleteTask(task.id)}>
            <CheckCircle color="#4EA8DE" size={20} />
          </button>
        ) 
        : (
          <button onClick={() => handleCompleteTask(task.id)}>
            <Circle color="#4EA8DE" size={20} />
          </button>
        )}
      <div>
        <span>{task.title}</span>
      </div>
      <button onClick={() => handleDeleteTask(task.id)}>
        <Trash color="#808080" size={20} />
      </button>
    </div>
  )
}
