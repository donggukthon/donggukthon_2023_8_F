import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextInput } from './TextInput'

export default {
  title: 'ui-system/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />

export const DefaultTextInput = Template.bind({})
DefaultTextInput.args = {
  error: false,
  placeholder: 'Placeholder',
  disabled: false,
}
