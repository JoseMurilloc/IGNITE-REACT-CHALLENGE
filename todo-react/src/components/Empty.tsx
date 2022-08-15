import styles from '../styles/components/empty.module.css'

import clipboardImage from '../assets/clipboard.svg'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboardImage} alt="logo" />
      <span className={styles.title}>
        Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
        itens a fazer
      </span>
    </div>
  )
}
