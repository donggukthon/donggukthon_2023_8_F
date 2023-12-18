import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Radio } from './Radio'

export default {
  title: 'ui-system/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const DefaultRadio = Template.bind({})
DefaultRadio.args = {
  checked: true,
  disabled: false,
}
