import { useState } from 'react';
import styles from '../styles/components/header.module.css';
import logoImage from '../assets/logo.svg';
import { PlusCircle } from 'phosphor-react';
import { Task } from '../pages/App';
import { TaskService } from '../services/task';

type Props = {
  onTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export function Header({onTasks}: Props) {
  const [title, setTitle] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  
  const handleCreateNewTask = async () => {
    setIsSubmit(true)
    const {status, newTask} = await TaskService.createNewTask(title)

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
          className={styles.inputSearch} 
          type="text" 
          placeholder="Adicionar uma nova tarefa"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <button 
          onClick={handleCreateNewTask} 
          disabled={isSubmit}
        >
          Criar
          <PlusCircle 
            color={isSubmit ? '#bfbfbf' : '#ffffff'} 
            size={20} 
          />
        </button>
      </div>   
    </header>
  );
}