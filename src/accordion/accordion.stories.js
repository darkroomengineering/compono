import React from 'react'
import { Accordion } from './index'

export default {
  title: 'Accordion',
  component: Accordion,
}

const Template = (args) => (
  <Accordion {...args}>
    <Accordion.Item value="1">
      <Accordion.Trigger>Accordion 1</Accordion.Trigger>
      <Accordion.Content>Content 1</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="2">
      <Accordion.Trigger>Accordion 2</Accordion.Trigger>
      <Accordion.Content>Content 2</Accordion.Content>
    </Accordion.Item>
  </Accordion>
)

export const Default = Template.bind({})
