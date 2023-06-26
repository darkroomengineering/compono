import React from 'react'
import { Lottie } from './index'

export default {
  title: 'Lottie',
  component: Lottie,
}

export const Default = () => <Lottie animation="./animation.json" />

export const Slow = () => <Lottie animation="./animation.json" speed={0.5} />

export const NoLoop = () => <Lottie animation="./animation.json" loop={false} />

export const NoAutoplay = () => <Lottie animation="./animation.json" autoplay={false} />

export const CustomClass = () => <Lottie animation="./animation.json" className="custom-class" />
