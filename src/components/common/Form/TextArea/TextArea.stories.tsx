import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextArea } from './TextArea'

export default {
  title: 'ui-system/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />

export const DefaultTextArea = Template.bind({})
DefaultTextArea.args = {
  error: false,
  placeholder: 'Placeholder',
  disabled: false,
}
