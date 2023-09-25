import BlazeSlider from 'blaze-slider'
import 'blaze-slider/dist/blaze.css'
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const BlazeSliderContext = createContext({})

export function useSlider() {
  return useContext(BlazeSliderContext)
}

export const Slider = ({ children, config = {}, enabled = true }) => {
  const { elRef, scrollNext, scrollPrev, scrollTo, currentIndex, scrollProgress } = _useBlazeSlider(config)

  useEffect(() => {
    if (!enabled && elRef.current) {
      // Assuming BlazeSlider has a destroy method
      elRef.current.destroy()
    }
  }, [elRef, enabled])

  return (
    <BlazeSliderContext.Provider
      value={{
        elRef,
        currentIndex,
        scrollPrev,
        scrollNext,
        scrollTo,
        scrollProgress,
      }}
    >
      {children}
    </BlazeSliderContext.Provider>
  )
}

function _useBlazeSlider(config) {
  const elRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sliderRef = useRef()

  useEffect(() => {
    if (!sliderRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config)

      sliderRef.current.onSlide((pageIndex, firstVisibleSlideIndex, lastVisibleSlideIndex) => {
        console.log(pageIndex, firstVisibleSlideIndex, lastVisibleSlideIndex)
        setCurrentIndex(pageIndex)
        const progress = pageIndex / (lastVisibleSlideIndex - firstVisibleSlideIndex)
        console.log(progress)
        setScrollProgress(progress)
      })
    }

    return () => {
      sliderRef.current && sliderRef.current.destroy()
    }
  }, [config])

  const scrollNext = useCallback(() => {
    sliderRef.current && sliderRef.current.next()
  }, [])

  const scrollPrev = useCallback(() => {
    sliderRef.current && sliderRef.current.prev()
  }, [])

  const scrollTo = useCallback((index) => {
    sliderRef.current && sliderRef.current.scrollTo(index)
  }, [])

  return { elRef, scrollNext, scrollPrev, scrollTo, currentIndex, scrollProgress }
}

const Slides = ({ children, className }) => {
  const { elRef } = useSlider()

  return (
    <div className={className} ref={elRef}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">{children}</div>
        </div>
      </div>
    </div>
  )
}

Slider.Slides = Slides
