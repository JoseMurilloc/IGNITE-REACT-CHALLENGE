import { ComponentStory, Meta } from '@storybook/react'
import { CardTask } from './CardTask'
import styles from '../styles/pages/app.module.css'

export type Task = {
  id: number
  complete: boolean
  title: string
}

export default {
  title: 'Components/CardTask',
  component: CardTask,
  decorators: [
    (Story) => (
      <div className={styles.container}>
        <div className={styles.main}>{Story()}</div>
      </div>
    ),
  ],
} as Meta<typeof CardTask>

const Template: ComponentStory<typeof CardTask> = (args) => (
  <main className={styles.main}>
    <div className={styles.listTasks}>
      <CardTask {...args} />
    </div>
  </main>
)

export const Default = Template.bind({})
Default.args = {
  task: {
    id: 1,
    complete: false,
    title: 'Aprender React Native',
  },
}
