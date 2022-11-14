import { ComponentStory, Meta } from '@storybook/react'
import { Header } from './Header'

export type Task = {
  id: number
  complete: boolean
  title: string
}

export default {
  title: 'Components/Header',
  component: Header,
} as Meta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
