import { Meta } from '@storybook/react'
import { Empty } from './Empty'
import styles from '../styles/pages/app.module.css'

export default {
  title: 'Components/Empty',
  component: Empty,
  decorators: [
    (Story) => (
      <div className={styles.container}>
        <div className={styles.main}>{Story()}</div>
      </div>
    ),
  ],
} as Meta

export const Default = {}
