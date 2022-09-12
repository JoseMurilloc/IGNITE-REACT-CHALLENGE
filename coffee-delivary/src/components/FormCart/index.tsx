import { CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../Input';
import { SelectControl } from '../SelectControl';
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
  const {setValue} = useFormContext()

  const handleSelectTypePayment = (type: MethodsPayment) => {
      setValue('paymentType', type)
      setSelectMethodPayment(type)
  }


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
          <div style={{width: 200}}>
            <Input 
              registerName="cep" 
              type="number" 
              placeholder="CEP" 
            />
          </div>
          <div>
            <Input 
              registerName="street" 
              type="text" 
              placeholder="Rua" 
            />
          </div>
          <div>
            <Input 
              registerName="number" 
              type="text" 
              placeholder="Número" 
            />
            <Input 
              registerName="complement" 
              type="text" 
              placeholder="Complemento" 
            />
          </div>
          <div>
            <Input 
              registerName="district" 
              type="text" 
              placeholder="Bairro" 
            />
            <Input 
              registerName="city" 
              type="text" 
              placeholder="Cidade" 
            />
            <SelectControl registerName="uf" />
          </div>
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
          {METHOD_PAYMENTS.map(({type, label}) => (
            <SelectPaymentButton  
              onClick={() => handleSelectTypePayment(type)}
              typePayment={type} 
              label={label} 
              selected={selectMethodPayment === type}
            />
          ))}
        </aside>
      </section>
    </>
  );
}
