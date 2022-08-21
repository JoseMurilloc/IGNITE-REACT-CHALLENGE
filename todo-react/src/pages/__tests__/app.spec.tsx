import { cleanup, render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import nock from 'nock'

describe('<App />', () => {
  it('should be have show message that loading todo', async () => {
    render(<App />)

    expect(screen.getByText('Carregando seus todos...')).toBeInTheDocument()
    cleanup()
  })

  it('should show tasks of todo on listing', async () => {
    render(<App />)
    nock('http://localhost:3333').get('/tasks').reply(200, [])
    await waitFor(() => {
      expect(screen.getByTestId('message-empty')).toBeInTheDocument()
    })
    cleanup()
  })
})
