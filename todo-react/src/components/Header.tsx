import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/components/header.module.css'
import logoImage from '../assets/logo.svg'
import { PlusCircle } from 'phosphor-react'
import { Task } from '../pages/App'
import { TaskService } from '../services/task'

type Props = {
  onTasks: Dispatch<SetStateAction<Task[]>>
}

export function Header({ onTasks }: Props) {
  const [title, setTitle] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [error, setError] = useState('')

  const handleCreateNewTask = async () => {
    if (!title) {
      setError('Campo obrigatório')
      return
    }
    setIsSubmit(true)
    setError('')
    const { status, newTask } = await TaskService.createNewTask(title)

    if (!status) {
      return
    }

    onTasks((oldTasks: Task[]) => [...oldTasks, newTask])
    setTitle('')
    setIsSubmit(false)
  }

  return (
    <header className={styles.container}>
      <img src={logoImage} alt="Logo da aplicação todo" />
      <div className={styles.contentInput}>
        <input
          className={!error ? styles.inputSearch : styles.inputSearchError}
          type="text"
          placeholder={!error ? 'Adicionar uma nova tarefa' : error}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button onClick={handleCreateNewTask} disabled={isSubmit}>
          Criar
          <PlusCircle color={isSubmit ? '#1C6793' : '#ffffff'} size="2rem" />
        </button>
      </div>
    </header>
  )
}
