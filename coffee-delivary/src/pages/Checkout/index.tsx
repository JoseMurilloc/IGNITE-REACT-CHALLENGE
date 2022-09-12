import { FormProvider, useForm } from 'react-hook-form';
import { Cart } from '../../components/Cart';
import { FormCart } from '../../components/FormCart';
import styles from './styles.module.css';

export function Checkout () {

  const newCartCoffeeForm = useForm()
  const { handleSubmit, register } = newCartCoffeeForm

  async function handleConfirmPayment(data: any) {
    console.log(data)
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
  );
}
