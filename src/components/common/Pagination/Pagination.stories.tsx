import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Pagination } from './Pagination'

export default {
  title: 'ui-system/Pagination',
  component: Pagination,
  argTypes: {
    totalPage: {
      control: 'number',
      defaultValue: 10,
      description: '전체 페이지 갯수',
    },
    pageSize: {
      control: 'number',
      defaultValue: 5,
      description: '노출할 페이지 번호 갯수',
    },
    currentIndex: {
      control: 'number',
      defaultValue: 0,
      description: '현재 페이지 번호 (0부터 시작)',
    },
    onChange: {
      control: false,
      action: '페이지 이동',
    },
  },
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />

export const DefaultPagination = Template.bind({})
