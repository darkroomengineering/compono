import cn from 'clsx'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import s from './slider.module.scss'

//this folder is temp

const SliderContext = createContext({})

export function useSlider() {
  return useContext(SliderContext)
}

export const Slider = ({ children, emblaApi = { autoplay: false }, enabled = true, customProps = {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const autoplay = Autoplay({ delay: emblaApi?.autoplay?.delay || null }, (emblaRoot) => emblaRoot.parentElement)
  const [emblaRef, embla] = useEmblaCarousel(emblaApi, emblaApi.autoplay ? [autoplay] : [])

  const scrollPrev = useCallback(() => {
    embla && embla.scrollPrev()
  }, [embla])

  const scrollNext = useCallback(() => {
    embla && embla.scrollNext()
  }, [embla])

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla])

  const getScrollProgress = useCallback(() => {
    embla && setScrollProgress(Math.max(0, Math.min(1, embla.scrollProgress())))
  }, [embla])

  const getScrollSnap = useCallback(() => {
    setCurrentIndex(embla.selectedScrollSnap())
  }, [embla])

  useEffect(() => {
    if (embla) {
      getScrollSnap()
      getScrollProgress()
      embla.on('select', getScrollSnap)
      embla.on('scroll', getScrollProgress)
      embla.on('reInit', getScrollProgress)
    }
  }, [embla])

  useEffect(() => {
    if (!enabled && embla) {
      embla.destroy()
    }
  }, [embla, enabled])

  return (
    <SliderContext.Provider
      value={{
        emblaRef,
        currentIndex,
        setCurrentIndex,
        scrollPrev,
        scrollNext,
        scrollTo,
        scrollProgress,
        customProps,
      }}
    >
      {children}
    </SliderContext.Provider>
  )
}

const Slides = ({ children, className }) => {
  const { emblaRef } = useSlider()

  return (
    <div className={cn(s.slider, className)} ref={emblaRef}>
      <div className={s.container}>{children}</div>
    </div>
  )
}

Slider.Slides = Slides
