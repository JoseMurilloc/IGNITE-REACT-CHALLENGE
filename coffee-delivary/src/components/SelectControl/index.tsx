import { STATES } from '../../util/fetchingAllStates'
import styles from './styles.module.css'

export function SelectControl({ ...rest }) {
  return (
    <select className={styles.containerSelectedControl} {...rest}>
      {STATES.map((state) => (
        <option value={state.uf}>{state.uf}</option>
      ))}
    </select>
  )
}
