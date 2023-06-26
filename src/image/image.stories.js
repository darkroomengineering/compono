import React from 'react'
import { Image } from './index'

export default {
  title: 'Image',
  component: Image,
}

const Template = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://unsplash.com/s/photos/random',
  alt: 'Sample Image',
  width: 500,
  height: 300,
}
