import { useEffect, useState } from 'react'
import { CardTask } from '../components/CardTask'
import { Empty } from '../components/Empty'
import { Header } from '../components/Header'
import { TaskService } from '../services/task'
import styles from '../styles/pages/app.module.css'

export type Task = {
  id: number
  complete: boolean
  title: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetchingAllTasks()
  }, [])

  const tasksComplete = tasks.filter((task) => task.complete).length

  const fetchingAllTasks = async () => {
    const response = await TaskService.getTasks()

    if (!response.status) {
      return
    }

    setTasks(response.tasks)
  }

  return (
    <div className={styles.container}>
      <Header onTasks={setTasks} />
      <main className={styles.main}>
        <section className={styles.info}>
          <aside className={styles.infoTask}>
            <span>Tarefas criadas</span>
            <div className={styles.circle}>
              <span>{tasks.length}</span>
            </div>
          </aside>

          <aside className={styles.infoTask}>
            <span>Concluídas</span>
            <div>
              <span className={styles.counter}>
                {`${tasksComplete} de ${tasks.length}`}
              </span>
            </div>
          </aside>
        </section>

        {!tasks.length && <Empty />}

        <div className={styles.listTasks}>
          {tasks.map((task) => (
            <CardTask key={task.id} task={task} onTasks={setTasks} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
