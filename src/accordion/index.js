import * as RadixAccordion from '@radix-ui/react-accordion'
import cn from 'clsx'
import { forwardRef } from 'react'
import s from './accordion.module.scss'

export function Accordion({ children, className, ...props }) {
  return (
    <div className={cn(s.container, className)}>
      <RadixAccordion.Root {...props}>{children}</RadixAccordion.Root>
    </div>
  )
}

export const AccordionItem = forwardRef(({ children, value, className = '' }, ref) => (
  <RadixAccordion.Item ref={ref} value={value} className={cn(className, s['item-wrapper'])}>
    {children}
  </RadixAccordion.Item>
))

const AccordionTrigger = forwardRef(({ children, className = '', onClick }, ref) => (
  <RadixAccordion.Header asChild>
    <RadixAccordion.Trigger className={cn(className, s['trigger-wrapper'])} ref={ref} onClick={onClick}>
      {children}
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
))

export const AccordionContent = forwardRef(({ children, className = '' }, ref) => {
  return (
    <RadixAccordion.Content className={cn(className, s['content-wrapper'])} ref={ref}>
      {children}
    </RadixAccordion.Content>
  )
})

AccordionItem.displayName = 'AccordionItem'
AccordionTrigger.displayName = 'AccordionTrigger'
AccordionContent.displayName = 'AccordionContent'

Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent
Accordion.Item = AccordionItem
