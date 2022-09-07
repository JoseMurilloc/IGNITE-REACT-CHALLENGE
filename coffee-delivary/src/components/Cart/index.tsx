import styles from './styles.module.css';

export function Cart () {
  return (
    <div className={styles.containerCartCoffee}>
      <footer>
        <div className={styles.infoLine}>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div className={styles.infoLine}>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div className={styles.infoLine}>
          <span>Total</span>
          <span>R$ 33,20</span>
        </div>
      </footer>
      <button type="submit">Confirmar Pedido</button>
    </div>
  )
}
