import React from 'react'
import { CustomHead } from './index'

export default {
  title: 'CustomHead',
  component: CustomHead,
}

const Template = (args) => <CustomHead {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Page Title',
  description: 'This is a description of the page.',
  image: {
    url: '/og-image.jpg',
    width: 1200,
    height: 630,
  },
  keywords: ['keyword1', 'keyword2'],
}
