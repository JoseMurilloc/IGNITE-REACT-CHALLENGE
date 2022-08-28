import styles from './styles.module.css';
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Header () {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.content}>
       <Link to="/">
         <img src={logoCoffeeDelivery} alt="logo coffee delivery" />
       </Link>

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
