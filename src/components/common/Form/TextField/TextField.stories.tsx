import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextField } from './TextField'

export default {
  title: 'ui-system/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const DefaultTextField = Template.bind({})
DefaultTextField.args = {
  placeholder: 'Placeholder',
  label: 'label',
  defaultMessage: 'defaultMessage',
  successMessage: '',
  errorMessage: '',
}
