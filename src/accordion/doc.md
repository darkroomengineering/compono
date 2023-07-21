# Accordion

## Slots

- Item: Wrapper for both trigger and content
- Trigger: Triggers opening or closing 
- Content: Content to show or hide

## Radix-ui Accordions

-- Docs: https://www.radix-ui.com/docs/primitives/components/accordion

## Example

```javascript
<Accordion type="single" collapsible={true} className={s.accordion}>
  {[{tirgger: 'click me', content: 'show me'}].map(({ trigger, content }, idx) => (
    <Accordion.Item
      key={`accordion-item-${idx}`}
      value={`accordion-item-${idx}`}
      className={ s.item}
    >
      <Accordion.Trigger
        className={ s.trigger}
      >
        <p>{trigger}</p>
      </Accordion.Trigger>
      <Accordion.Content className={s.content}>
        <p >{content}</p>
      </Accordion.Content>
    </Accordion.Item>
))}
</Accordion>
```

