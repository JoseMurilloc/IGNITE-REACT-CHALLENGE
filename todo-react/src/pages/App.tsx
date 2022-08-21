import { Spinner } from 'phosphor-react'
import { useEffect, useMemo, useState } from 'react'
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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const mounted = true
    fetchingAllTasks()

    return () => {
      mounted: false
    }
  }, [])

  const tasksComplete = useMemo(
    () => tasks.filter((task) => task.complete).length,
    [tasks],
  )

  const fetchingAllTasks = async () => {
    setLoading(true)
    const response = await TaskService.getTasks()

    if (!response.status) {
      setLoading(false)
      return
    }

    setTasks(response.tasks)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <Header onTasks={setTasks} />

        <section className={styles.loader}>
          <Spinner color="#89adc3" size="2rem" />
          <h2>Carregando seus todos...</h2>
        </section>
      </div>
    )
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

        {!tasks.length && !loading && <Empty />}

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
