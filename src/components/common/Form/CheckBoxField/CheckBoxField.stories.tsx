import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckBoxField } from './CheckBoxField'

export default {
  title: 'ui-system/CheckBoxField',
  component: CheckBoxField,
} as ComponentMeta<typeof CheckBoxField>

const Template: ComponentStory<typeof CheckBoxField> = (args) => <CheckBoxField {...args} />

export const DefaultCheckBoxField = Template.bind({})
DefaultCheckBoxField.args = {
  checked: true,
  disabled: false,
  label: 'label',
  defaultMessage: 'defaultMessage',
  successMessage: 'successMessage',
  errorMessage: 'errorMessage',
}
