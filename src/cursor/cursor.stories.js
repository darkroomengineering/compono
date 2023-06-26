import React from 'react'
import { Cursor } from './index'

export default {
  title: 'Cursor',
  component: Cursor,
}

const Template = (args) => <Cursor {...args} />

export const Default = Template.bind({})
Default.args = {}
