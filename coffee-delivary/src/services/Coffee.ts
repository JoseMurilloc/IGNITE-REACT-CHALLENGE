import { CoffeeDTO } from '../dtos/Coffee'

interface ClientFormData {
  cep: string
  city: string
  complement: string
  district: string
  number: string
  paymentType: string
  street: string
}

interface CreateBuyCoffee {
  coffees: Array<CoffeeDTO>
  infoClient: ClientFormData
}

export class CoffeeService {
  static async getCoffees() {
    try {
      const response = await fetch('http://localhost:3333/coffees')
      const json = await response.json()

      return {
        ok: true,
        coffees: json,
      }
    } catch (err) {
      return {
        ok: false,
        message: 'Error na requisição de tarefas',
      }
    }
  }

  static async createBuyCoffee(data: CreateBuyCoffee) {
    try {
      await fetch('http://localhost:3333/carts', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ ...data }),
      })

      console.log({ data })

      return {
        ok: true,
      }
    } catch (err) {
      return {
        ok: false,
        message: 'Error na requisição de tarefas',
      }
    }
  }
}
