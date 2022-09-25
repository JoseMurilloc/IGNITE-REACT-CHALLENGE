import styles from './styles.module.css'
import CoffeeIntro from '../../assets/CoffeeIntro.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CardCoffee } from '../../components/CardCoffee'
import { CoffeeService } from '../../services/Coffee'
import { CoffeeDTO } from '../../dtos/Coffee'

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeDTO[]>([])

  useEffect(() => {
    loadCoffees()
  }, [])

  async function loadCoffees() {
    const response = await CoffeeService.getCoffees()

    if (!response.ok) {
      return
    }

    setCoffees(response.coffees)
  }

  return (
    <main className={styles.container}>
      <section className={styles.intro}>
        <section className={styles.contentIntro}>
          <aside className={styles.title}>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </aside>
          <aside className={styles.itens}>
            <div className={styles.item}>
              <div className={`${styles.circleIcon} ${styles.circleCart}`}>
                <ShoppingCart color="#FFF" size="2.2rem" weight="fill" />
              </div>
              Compra simples e segura
            </div>
            <div className={styles.item}>
              <div className={`${styles.circleIcon} ${styles.circlePackage}`}>
                <Package color="#FFF" size="2.2rem" weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </div>
            <div className={styles.item}>
              <div className={`${styles.circleIcon} ${styles.circleTimer}`}>
                <Timer color="#FFF" size="2.2rem" weight="fill" />
              </div>
              Entrega rápida e rastreada
            </div>
            <div className={styles.item}>
              <div className={`${styles.circleIcon} ${styles.circleCoffee}`}>
                <Coffee color="#FFF" size="2.2rem" weight="fill" />
              </div>
              O café chega fresquinho até você
            </div>
          </aside>
        </section>
        <aside>
          <img src={CoffeeIntro} alt="coffee" />
        </aside>
      </section>
      <section className={styles.listCoffees}>
        <h1 className={styles.titleListCoffee}>Nossos cafés</h1>
        <div className={styles.coffees}>
          {coffees.map((coffee) => (
            <CardCoffee key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>
    </main>
  )
}
