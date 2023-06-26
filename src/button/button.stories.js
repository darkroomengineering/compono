import React from 'react'
import { Button } from './index'

export default {
  title: 'Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button Button',
  className: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Link Button',
  href: '#',
  className: 'secondary',
}
