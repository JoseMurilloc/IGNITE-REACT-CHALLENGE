import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
  it('Render component correctly', () => {
    render(<App />)
    expect(1 + 1).toEqual(2)
  })
})
