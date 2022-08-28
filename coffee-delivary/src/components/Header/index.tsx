import styles from './styles.module.css';
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import { useMemo } from 'react';

export function Header () {
  
  const {coffees} = useCart();
  const amountCoffeeOfCart = useMemo(() => coffees.length, [coffees]);

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
          <Link to='/Checkout' className={styles.actionCart}>
            {!!amountCoffeeOfCart &&  (
              <aside className={styles.counter}>
                {amountCoffeeOfCart}
              </aside>
            )}
            <ShoppingCart color="#C47F17" size={22} weight="fill" />
          </Link>
        </div>
      </div>
    </header>
  );
}
