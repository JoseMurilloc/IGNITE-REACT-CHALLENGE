import styles from './styles.module.css';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { formatNumber } from '../../util/formatNumber';

interface Props {
  coffee: {
    types: string[]
    title: string;
    description: string;
    price: number; 
    image: string;
  }
}

export function CardCoffee ({coffee}: Props) {
  return (
    <div className={styles.containerCardCoffee}>
      <header>
        <img 
          className={styles.imageCoffee} 
          src={coffee.image} 
          alt="card" 
        />
      </header>
      <section className={styles.shippers}>
        {
          coffee.types.map(type => (
            <div className={styles.shipper}>
              <span>{type}</span>
            </div>
          ))
        }
      </section>
      <h1 className={styles.titleCard}>Expresso Tradicional</h1>
      <p className={styles.descriptionCard}>{coffee.description}</p>

      <footer>
        <div>R$ 
          <span className={styles.price}>
            {` ${formatNumber(coffee.price)}`}
          </span>
        </div>
        <div className={styles.actionsCart}>
          <div className={styles.addonsCoffeeCart}>
            <button className={styles.buttonMinus}>
            <Minus color="#8047F8" size="1.5rem" weight="fill"/>
            </button>
            <aside className={styles.counter}>1</aside>
            <button className={styles.buttonPlus}>
              <Plus color="#8047F8" size="1.5rem" weight="fill"/>
            </button>
          </div>

          <button className={styles.buttonCart}>
            <ShoppingCart color="#FFF" size="2.2rem" weight="fill" />
          </button>
        </div>

      </footer>
    </div>
  );
}
