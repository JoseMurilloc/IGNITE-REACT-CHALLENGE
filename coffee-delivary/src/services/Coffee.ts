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
}
