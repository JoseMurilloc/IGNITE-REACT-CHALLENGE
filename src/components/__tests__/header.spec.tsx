import React from 'react';
import { render, screen} from '@testing-library/react';
import { Header } from '../Header';

describe('<Header />', () => {
  it('Render component correctly', () => {
    render(<Header />);
    expect(screen.getByPlaceholderText('Adicionar uma nova tarefa')).toBeInTheDocument();
  })
})