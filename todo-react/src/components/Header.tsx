import { useState } from 'react'
import styles from '../styles/components/header.module.css'
import logoImage from '../assets/logo.svg'
import { PlusCircle } from 'phosphor-react'
import { TaskService } from '../services/task'
import { addTasksAction } from '../reducer/tasks/actions'
import { useTask } from '../contexts/task'

type Props = {}

export function Header(props: Props) {
  const { dispatch } = useTask()

  const [inputSearchTitle, setInputSearchTitle] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [error, setError] = useState('')

  const handleCreateNewTask = async () => {
    if (!inputSearchTitle) {
      setError('Campo obrigatório *')
      return
    }
    setIsSubmit(true)
    setError('')
    const { status, newTask } = await TaskService.createNewTask(
      inputSearchTitle,
    )

    if (!status) {
      return
    }

    dispatch(addTasksAction(newTask))
    setInputSearchTitle('')
    setIsSubmit(false)
  }

  const handleChangeSearchValue = (title: string) => {
    setError('')
    setInputSearchTitle(title)
  }

  return (
    <header className={styles.container}>
      <img src={logoImage} alt="Logo da aplicação todo" />
      <div className={styles.contentInput}>
        <input
          className={!error ? styles.inputSearch : styles.inputSearchError}
          type="text"
          placeholder={!error ? 'Adicionar uma nova tarefa' : error}
          onChange={(e) => handleChangeSearchValue(e.target.value)}
          value={inputSearchTitle}
        />
        <button onClick={handleCreateNewTask} disabled={isSubmit}>
          Criar
          <PlusCircle color={isSubmit ? '#1C6793' : '#ffffff'} size="2rem" />
        </button>
      </div>
    </header>
  )
}
