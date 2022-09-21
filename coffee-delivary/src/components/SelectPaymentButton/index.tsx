import { Bank, CreditCard, Money } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { MethodsPayment } from '../FormCart/types';
import styles from './styles.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  typePayment: MethodsPayment
  selected: boolean
}

export function SelectPaymentButton ({
  label,
  typePayment: type,
  selected = false,
  ...rest
}: Props) {
  return (
    <button
      type="button"
      className={selected
        ? styles.containerSelectPaymentButtonSelected
        : styles.containerSelectPaymentButton}
      {...rest}
    >
      {type === 'debit' && <Bank size="2rem" color="#8047F8" />}
      {type === 'money' && <Money size="2rem" color="#8047F8" />}
      {type === 'credit' && (
        <CreditCard
          data-testid="credit-icon"
          size="2rem"
          color="#8047F8"
        />
      )}
      <span>{label}</span>
    </button>
  )
}
