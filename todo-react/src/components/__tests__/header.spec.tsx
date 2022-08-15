import { render, screen, waitFor } from '@testing-library/react'
import { Header } from '../Header'
import userEvent from '@testing-library/user-event'

describe('<Header />', () => {
  it('Render component correctly', () => {
    render(<Header onTasks={jest.fn} />)
    expect(
      screen.getByPlaceholderText('Adicionar uma nova tarefa'),
    ).toBeInTheDocument()
  })

  it('Submit search input correctly', async () => {
    render(<Header onTasks={jest.fn} />)
    const inputSearch = screen.getByRole('textbox')
    userEvent.type(inputSearch, 'New task of todo')

    await waitFor(() => {
      expect(inputSearch).toHaveValue('New task of todo')
    })
  })
})
