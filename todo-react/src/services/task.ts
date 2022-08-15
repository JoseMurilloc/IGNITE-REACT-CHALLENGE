export class TaskService {
  static async getTasks() {
    try {
      const response = await fetch('http://localhost:3333/tasks')
      const json = await response.json()

      return {
        status: true,
        tasks: json,
      }
    } catch (err) {
      return {
        status: false,
        message: 'Error na requisição de tarefas',
      }
    }
  }

  static async createNewTask(title: string) {
    try {
      const response = await fetch('http://localhost:3333/tasks', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ title, complete: false }),
      })
      const json = await response.json()

      return {
        status: true,
        newTask: json,
      }
    } catch (err) {
      return {
        status: false,
        message: 'Error na requisição de tarefas',
      }
    }
  }

  static async deleteTask(taskId: number) {
    try {
      const response = await fetch(`http://localhost:3333/tasks/${taskId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
      })
      const json = await response.json()

      return {
        status: true,
      }
    } catch (err) {
      return {
        status: false,
        message: 'Error na requisição de tarefas',
      }
    }
  }

  static async completeTask(taskId: number, completeCurrent: boolean) {
    try {
      const response = await fetch(`http://localhost:3333/tasks/${taskId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PATCH',
        body: JSON.stringify({ complete: !completeCurrent }),
      })
      const json = await response.json()

      return {
        status: true,
        updatedTask: json,
      }
    } catch (err) {
      return {
        status: false,
        message: 'Error na requisição de tarefas',
      }
    }
  }
}
