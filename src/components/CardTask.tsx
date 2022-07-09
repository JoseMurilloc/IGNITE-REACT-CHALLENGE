import styles from '../styles/components/cardTask.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';


type Props = {
  task: {
    id: number;
    complete: boolean;
    title: string;
  }
}

export function CardTask ({task}: Props) {
  return (
    <div className={styles.container}>
      {task.complete 
        ? <CheckCircle color="#4EA8DE" size={20} /> 
        : <Circle color="#4EA8DE" size={20} />}
      <span>{task.title}</span>
      <Trash color="#808080" size={20} />
    </div>
  )
}
