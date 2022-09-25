import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Cart } from '../../components/Cart'
import { FormCart } from '../../components/FormCart'
import { useCart } from '../../hooks/CartContext'
import { CoffeeService } from '../../services/Coffee'

import styles from './styles.module.css'

const buyCartCoffeeSchema = z.string()

interface ClientFormData {
  cep: string
  city: string
  complement: string
  district: string
  number: string
  paymentType: string
  street: string
}

export function Checkout() {
  const newCartCoffeeForm = useForm()
  const { handleSubmit } = newCartCoffeeForm
  const navigate = useNavigate()
  const { resetCart, coffees } = useCart()

  async function handleConfirmPayment(data: ClientFormData): Promise<void> {
    await CoffeeService.createBuyCoffee({
      coffees,
      infoClient: data,
    })

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
