import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { useState } from 'react';
import { SelectPaymentButton } from '../SelectPaymentButton';
import styles from './styles.module.css';
import { ListPayments, MethodsPayment } from './types';

const METHOD_PAYMENTS: ListPayments = [
  {type: 'credit', label: 'Cartão de Crédito'},
  {type: 'debit', label: 'Cartão de Débito'},
  {type: 'money', label: 'Dinheiro'},
]

export function FormCart () {
  const [selectMethodPayment, setSelectMethodPayment] = useState<MethodsPayment>('credit')
  return (
    <>  
      <section className={styles.contentInfoOfPurchase}>
        <header>
          <MapPinLine size="2.2rem" color="#C47F17" />
          <div className={styles.contentHeader}>
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </header>
        <div className={styles.containerInputs}>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Complemento" />
        </div>
      </section>
      <section className={styles.formPaymentContainer}>
        <header>
          <CurrencyDollar size="2.2rem" color="#8047F8" />
          <div className={styles.contentHeader}>
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </header>
        <aside className={styles.paymentsContainer}>
          {METHOD_PAYMENTS.map(payment => (
            <SelectPaymentButton  
              onClick={() => {
                console.log(payment.type)
                setSelectMethodPayment(payment.type)
              }}
              typePayment={payment.type} 
              label={payment.label} 
              selected={selectMethodPayment === payment.type}
            />
          ))}
        </aside>
      </section>
    </>
  );
}
