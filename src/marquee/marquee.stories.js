import React from 'react'
import { Marquee } from './index'

export default {
  title: 'Components/Marquee',
  component: Marquee,
}

export const Default = () => <Marquee>Default Marquee</Marquee>

export const Repeated = () => <Marquee repeat={3}>Repeated Marquee</Marquee>

export const Slow = () => <Marquee duration={10}>Slow Marquee</Marquee>

export const Offset = () => <Marquee offset={50}>Offset Marquee</Marquee>

export const Inverted = () => <Marquee inverted>Inverted Marquee</Marquee>

export const Paused = () => <Marquee animationStart={false}>Paused Marquee</Marquee>

export const CustomClass = () => <Marquee className="custom-class">Custom Class Marquee</Marquee>
