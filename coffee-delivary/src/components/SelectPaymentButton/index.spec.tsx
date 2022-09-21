import { render, screen } from '@testing-library/react'
import { SelectPaymentButton } from '.'
import { MethodsPayment } from '../FormCart/types'

describe('<SelectPaymentButton />', () => {
  it('Render component correctly', () => {
    const props = {
      label: 'Cartão de crédito',
      typePayment: 'credit' as MethodsPayment,
      selected: false
    }
    render(<SelectPaymentButton {...props} />)

    expect(screen.getByText(props.label)).toBeInTheDocument()
    expect(screen.getByTestId('credit-icon')).toBeInTheDocument()
  })

  it('Should be have that render buttons styles to state selected correctly', () => {
    const props = {
      label: 'Cartão de crédito',
      typePayment: 'credit' as MethodsPayment,
      selected: false
    }
    const { container } = render(<SelectPaymentButton {...props} />)

    expect(container.parentElement).toMatchSnapshot()
  })

  it('Should be have that render buttons styles to state selected correctly', () => {
    const props = {
      label: 'Cartão de debito',
      typePayment: 'debit' as MethodsPayment,
      selected: true
    }
   const { container } = render(<SelectPaymentButton {...props} />)

   expect(container.parentElement).toMatchSnapshot()

  })
})
