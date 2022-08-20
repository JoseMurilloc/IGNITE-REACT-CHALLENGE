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

  it('should it is with search input clear after the click button create', async () => {
    render(<Header onTasks={jest.fn} />)
    const inputSearch = screen.getByRole('textbox')
    userEvent.type(inputSearch, 'New task of todo')

    const buttonCreateTODO = screen.getByRole('button')
    await userEvent.click(buttonCreateTODO)

    await waitFor(() => {
      expect(inputSearch).toHaveValue('')
    })
  })

  it('should be have not permitted submit create new tudo with input clear', async () => {
    render(<Header onTasks={jest.fn} />)

    const buttonCreateTODO = screen.getByRole('button')
    await userEvent.click(buttonCreateTODO)

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Campo obrigatório')).toHaveValue('')
    })
  })
})
