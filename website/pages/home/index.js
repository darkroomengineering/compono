import { Layout } from 'layouts/default'
import { Slider, useSlider } from '../../../src'
import s from './home.module.scss'

const CustomSlide = ({ children, className }) => {
  const { scrollProgress } = useSlider()

  return (
    <div className={className}>
      {console.log(scrollProgress)}
      {children}
    </div>
  )
}

const NextSlide = ({ children, className }) => {
  const { scrollNext } = useSlider()

  return (
    <button onClick={scrollNext} className={className}>
      {children}
    </button>
  )
}

const PrevSlide = ({ children, className }) => {
  const { scrollPrev } = useSlider()

  return (
    <button onClick={scrollPrev} className={className}>
      {children}
    </button>
  )
}

export default function Home() {
  return (
    <Layout theme="light">
      <section className={s.content}>
        <Slider config={{ all: { enableAutoplay: false, slidesToShow: 2 } }}>
          <PrevSlide>PrevSlide</PrevSlide>
          <Slider.Slides>
            <CustomSlide className={s.slide}>Slide 1</CustomSlide>
            <CustomSlide className={s.slide}>Slide 2</CustomSlide>
            <CustomSlide className={s.slide}>Slide 3</CustomSlide>
          </Slider.Slides>
          <NextSlide>NextSlide</NextSlide>
        </Slider>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
