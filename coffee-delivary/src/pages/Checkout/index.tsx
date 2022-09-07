import { FormProvider, useForm } from 'react-hook-form';
import { Cart } from '../../components/Cart';
import { FormCart } from '../../components/FormCart';
import styles from './styles.module.css';

export function Checkout () {

  const newBuyForm = useForm()
  const { handleSubmit } = newBuyForm

  async function handleConfirmPayment(data: any) {
    console.log({data})
  }

  return (
    <main className={styles.containerCheckout}>
      <form onSubmit={handleSubmit(handleConfirmPayment)}>
        <section className={styles.sectionInfoOfPurchase}>
          <h2>Complete seu pedido</h2>
          <FormProvider {...newBuyForm}>
            <FormCart />
          </FormProvider>
        </section>
        <section>
          <h2>Cafés selecionados</h2>
          <Cart />
        </section>
      </form>
    </main>
  );
}
