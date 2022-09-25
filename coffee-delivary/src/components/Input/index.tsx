import { InputHTMLAttributes } from 'react'
import { FormProvider, useFormContext } from 'react-hook-form'
import styles from './styles.module.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  registerName: string
}

export function Input({ registerName, ...rest }: Props) {
  const { register } = useFormContext()
  return (
    <input
      {...register(registerName)}
      className={styles.containerInputControl}
      {...rest}
    />
  )
}
