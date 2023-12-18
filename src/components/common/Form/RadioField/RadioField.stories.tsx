import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RadioField } from './RadioField'

export default {
  title: 'ui-system/RadioField',
  component: RadioField,
} as ComponentMeta<typeof RadioField>

const Template: ComponentStory<typeof RadioField> = (args) => <RadioField {...args} />

export const DefaultRadioField = Template.bind({})
DefaultRadioField.args = {
  checked: true,
  disabled: false,
  label: 'label',
  defaultMessage: 'defaultMessage',
  successMessage: 'successMessage',
  errorMessage: 'errorMessage',
}
