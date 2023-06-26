import React from 'react'
import { Kinesis } from './index'

export default {
  title: 'Kinesis',
  component: Kinesis,
}

export const Default = () => (
  <Kinesis>
    <div>This component moves with your mouse!</div>
  </Kinesis>
)

export const CustomSpeed = () => (
  <Kinesis speed={50}>
    <div>This component moves with your mouse at a custom speed!</div>
  </Kinesis>
)
