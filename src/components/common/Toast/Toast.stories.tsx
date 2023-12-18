import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ToastComponent } from './Toast'

export default {
  title: 'ui-system/Toast',
  component: ToastComponent,
  argTypes: {
    message: {
      control: 'text',
      defaultValue: '메시지를 입력하세요',
      description: '토스트 메시지',
    },
    open: {
      control: 'boolean',
      defaultValue: false,
      description: '토스트 오픈 여부',
    },
    renderIcon: {
      control: false,
      description: '토스트 아이콘. 실사용 시 원하는 아이콘 셋으로 변경할 수 있습니다',
    },
  },
} as ComponentMeta<typeof ToastComponent>

const Template: ComponentStory<typeof ToastComponent> = (args) => <ToastComponent {...args} />

export const DefaultToast = Template.bind({})
DefaultToast.args = {
  message: '토스트 메시지입니다',
  opened: true,
}
