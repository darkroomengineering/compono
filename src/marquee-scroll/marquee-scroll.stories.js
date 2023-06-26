import { ReactLenis } from '@studio-freight/react-lenis'
import React from 'react'
import { MarqueeScroll } from './index'

export default {
  title: 'Components/MarqueeScroll',
  component: MarqueeScroll,
}

const Template = (args) => (
  <ReactLenis root>
    <MarqueeScroll {...args} />
  </ReactLenis>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Default MarqueeScroll',
}

export const Repeated = Template.bind({})
Repeated.args = {
  children: 'Repeated MarqueeScroll',
  repeat: 3,
}

export const CustomClass = Template.bind({})
CustomClass.args = {
  className: 'custom-class',
  children: 'Custom Class MarqueeScroll',
}
