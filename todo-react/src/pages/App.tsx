import { Spinner } from 'phosphor-react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { CardTask } from '../components/CardTask'
import { Empty } from '../components/Empty'
import { Header } from '../components/Header'
import { useTask } from '../contexts/task'
import { setTasksAction } from '../reducer/tasks/actions'

import { TaskService } from '../services/task'
import styles from '../styles/pages/app.module.css'

function App() {
  const { tasks, dispatch } = useTask()
  const [loading, setLoading] = useState(false)

  const tasksComplete = useMemo(
    () => tasks.filter((task) => task.complete).length,
    [tasks],
  )

  const fetchingAllTasks = useCallback(async () => {
    setLoading(true)
    const { status, tasks } = await TaskService.getTasks()

    if (!status) {
      setLoading(false)
      return
    }

    dispatch(setTasksAction(tasks))
    setLoading(false)
  }, [dispatch])

  useEffect(() => {
    fetchingAllTasks()
  }, [fetchingAllTasks])

  if (loading) {
    return (
      <div className={styles.container}>
        <Header />

        <section className={styles.loader}>
          <Spinner color="#89adc3" size="2rem" />
          <h2>Carregando seus todos...</h2>
        </section>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Header />
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
            <CardTask key={task.id} task={task} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
