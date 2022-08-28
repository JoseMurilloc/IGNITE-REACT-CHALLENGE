import {  CurrencyDollar, MapPin, ShoppingCart, ShoppingCartSimple, Timer } from 'phosphor-react';
import styles from './styles.module.css'
import IllustrationSuccess from '../../assets/IllustrationSuccess.svg';

export function Success () {
  return (
    <div className={styles.containerSuccess}>
      <main>
        <div className={styles.content}>
          <h1>Uhu! Pedido confirmado</h1>
          <span className={styles.subtitle}>Agora é só aguardar que logo o café chegará até você</span>
          <section className={styles.infos}>
            <aside>
              <div className={`${styles.circleIcon} ${styles.circleMaPin}`}>
                  <MapPin color="#FFF" size="2.2rem" weight="fill" />
              </div>              
              <span className={styles.infoText}>Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</span>
            </aside>
            <aside>
              <div className={`${styles.circleIcon} ${styles.circleTimer}`}>
                  <Timer color="#FFF" size="2.2rem" weight="fill" />
              </div>              
              <span className={styles.infoText}>Previsão de entrega {`\n`} 20 min - 30 min </span>
            </aside>
            <aside>
              <div className={`${styles.circleIcon} ${styles.circleDollar}`}>
                  <CurrencyDollar color="#FFF" size="2.2rem" weight="fill" />
              </div>              
              <span className={styles.infoText}>Pagamento na entrega Cartão de Crédito</span>
            </aside>
          </section>
        </div>
        <img className={styles.illustration} src={IllustrationSuccess} alt="illustration success" />
      </main>
    </div>
  ); 
}