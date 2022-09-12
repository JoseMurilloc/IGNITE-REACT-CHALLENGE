import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react';
import { useCart } from '../../hooks/CartContext';
import styles from './styles.module.css';

export function Cart () {
  const {coffees} = useCart()
  return (
    <div className={styles.containerCartCoffee}>
      <main>
        {coffees.map(coffee => (
          <>
            <aside className={styles.coffee}>
              <aside className={styles.infoCoffee}>
                <img src={coffee.image} alt="image-coffee" />
                <div className={styles.detailsCoffee}>
                  <div className={styles.actionsCart}>
                    <h1>{coffee.title}</h1>
                    <div className={styles.addonsCoffeeCart}>
                      <button onClick={() => {}} className={styles.buttonMinus}>
                        <Minus color="#8047F8" size="1.5rem" weight="fill"/>
                      </button>
                      <aside className={styles.counter}>1</aside>
                      <button onClick={() => {}} className={styles.buttonPlus}>
                        <Plus color="#8047F8" size="1.5rem" weight="fill"/>
                      </button>
                      <button
                        onClick={() => {}}
                        className={styles.buttonRemoveCart}>
                          <Trash color="#8047F8" size="2.2rem" />
                          <span>Remover</span>
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
              <div className={styles.price}>
                <span>R$ 100,12</span>
              </div>
            </aside>
            <div className={styles.separator} />
          </>
        ))}
      </main>
      <footer>
          <button className={styles.confirmOrder}>
            <span>Confirmar Pedido</span>
          </button>
      </footer>
    </div>
  )
}
