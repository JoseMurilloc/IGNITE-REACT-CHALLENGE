import { useState } from 'react';
import { Empty } from '../components/Empty';
import { Header } from '../components/Header';
import styles from '../styles/pages/app.module.css';

type Task = {
  id: number;
  complete: boolean;
  title: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.info}>
          <aside className={styles.infoTask}>
            <span>Tarefas criadas</span>
            <div className="circle">
              <span>0</span>
            </div>
          </aside>

          <aside className={styles.infoTask}>
            <span>Concluídas</span>
            <div className="circle">
              <span>0</span>
            </div>
          </aside>
        </section>

        <Empty /> 
      </main>
    </div>
  )
}

export default App
