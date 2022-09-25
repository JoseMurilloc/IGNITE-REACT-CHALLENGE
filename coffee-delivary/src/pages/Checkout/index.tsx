import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Cart } from '../../components/Cart'
import { FormCart } from '../../components/FormCart'
import { useCart } from '../../hooks/CartContext'

import styles from './styles.module.css'

const buyCartCoffeeSchema = z.string()

export function Checkout() {
  const newCartCoffeeForm = useForm()
  const { handleSubmit, register } = newCartCoffeeForm
  const navigate = useNavigate()
  const { resetCart, coffees } = useCart()

  async function handleConfirmPayment(data: any): Promise<void> {
    if (coffees.length < 1) {
      return
    }
    console.log(data)
    navigate('/success')
    resetCart()
  }

  return (
    <main className={styles.containerCheckout}>
      <form onSubmit={handleSubmit(handleConfirmPayment)}>
        <section className={styles.sectionInfoOfPurchase}>
          <h2>Complete seu pedido</h2>
          <FormProvider {...newCartCoffeeForm}>
            <FormCart />
          </FormProvider>
        </section>
        <section className={styles.sectionCart}>
          <h2>Cafés selecionados</h2>
          <Cart />
        </section>
      </form>
    </main>
  )
}
