import styles from './styles.module.css';
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header () {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.content}>
        <img src={logoCoffeeDelivery} alt="logo coffee delivery" />

        <div className={styles.actions}>
          <button className={styles.actionLocalization}>
            <MapPin size={22} weight="fill" />
            <span>Porto alegre</span>
          </button>
          <button className={styles.actionCart}>
            <ShoppingCart color="#C47F17" size={22} weight="fill" />
          </button>
        </div>
      </div>
    </header>
  );
}
