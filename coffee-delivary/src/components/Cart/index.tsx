import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react';
import { useMemo, useState } from 'react';
import { useCart } from '../../hooks/CartContext';
import { formatNumber } from '../../util/formatNumber';
import styles from './styles.module.css';

export function Cart () {

  const {coffees,removeCoffeeCart, incrementCoffeeCart, decrementCoffeeCart} = useCart()
  const [deliveryValue, setDeliveryValue] = useState(3)

  const totalPrice = useMemo(() =>
    coffees.reduce((sumTotal, coffee) => sumTotal += (coffee.price * coffee.amount), 0)
  , [coffees])

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
                    <button type="button" onClick={() => decrementCoffeeCart(coffee.id)} className={styles.buttonMinus}>
                      <Minus color="#8047F8" size="1.5rem" weight="fill"/>
                    </button>
                    <aside className={styles.counter}>{coffee.amount}</aside>
                    <button type="button" onClick={() => incrementCoffeeCart(coffee.id)} className={styles.buttonPlus}>
                      <Plus color="#8047F8" size="1.5rem" weight="fill"/>
                    </button>
                    <button onClick={() => removeCoffeeCart(coffee.id)} type="button" className={styles.buttonRemoveCart}>
                        <Trash color="#8047F8" size="2.2rem" />
                        <span>Remover</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            <div className={styles.price}>
            <span>R$ {formatNumber(coffee.price * coffee.amount)}</span>
            </div>
          </aside>
          <div className={styles.separator} />
        </>
        ))}
      </main>
      <footer>
          <div className={styles.footerContent}>
            <div className={styles.infoItem}>
              <span>Total de itens</span>
              <span>R$ {formatNumber(totalPrice)}</span>
            </div>
            <div className={styles.infoItem}>
              <span>Entrega</span>
              <span>R$ {formatNumber(deliveryValue)}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.total}>Total</span>
              <span className={styles.total}>R$ {formatNumber(totalPrice + deliveryValue)}</span>
            </div>
          </div>
          <button className={styles.buttonConfirm}>
            <span>Confirmar Pedido</span>
          </button>
      </footer>
    </div>
  )
}
