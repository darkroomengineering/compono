# Slider

## Slots

- Slider: logic for Slider
- Slides: content for slides
- Order: Rendering order is determined explicitly by the order of declaration of the slots

## useSlider context to expose methods
-- currentIndex: current slider number 
-- setCurrentIndex: set slider number
-- scrollPrev: action for slide to previous
-- scrollNext: action for slide to next
-- scrollTo: action to slide to specific slider number
-- scrollProgress: number between 0 and of slider progress
-- customProps: custom object to pass user defined objects to context

## Embla-Carousel-React

-- Docs: https://www.embla-carousel.com/
-- Use emblaApi: to pass api library methods
-- autoplay is the only method which not belongs to the library but is used in the same way, see example.

## Example

```javascript
<Slider
  emblaApi={{
    slidesToScroll: 1,
    skipSnaps: false,
    align: 'start',
    loop: true,
    autoplay: {
      delay: 1500 // in ms
    },
  }}
>
    {['slide me', 'slide me', 'slide me', 'slide me', 'slide me'].map(
      (item, i) => (
  <Slider.Slides>
        <p className={s.slide} key={i}>
          {item}
        </p>
  </Slider.Slides>
      ),
    )}
  <SliderButtons />
</Slider>

const SliderButtons = () => {
  const { scrollPrev, scrollNext } = useSlider()

  return (
    <div>
      <button onClick={scrollPrev} className={s['slide-buttons']}>
        previous
      </button>
      <button onClick={scrollNext} className={s['slide-buttons']}>
        next
      </button>
    </div>
  )
}
```

