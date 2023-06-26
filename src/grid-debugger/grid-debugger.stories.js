import React from 'react'
import { GridDebugger } from './index'

export default {
  title: 'GridDebugger',
  component: GridDebugger,
}

const Template = (args) => <GridDebugger {...args} />

export const Default = Template.bind({})
Default.args = {}
