import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextAreaField } from './TextAreaField'

export default {
  title: 'ui-system/TextAreaField',
  component: TextAreaField,
} as ComponentMeta<typeof TextAreaField>

const Template: ComponentStory<typeof TextAreaField> = (args) => <TextAreaField {...args} />

export const DefaultTextAreaField = Template.bind({})
DefaultTextAreaField.args = {
  placeholder: 'Placeholder',
  label: 'label',
  defaultMessage: 'defaultMessage',
  successMessage: '',
  errorMessage: '',
}
