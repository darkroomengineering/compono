import { Lottie } from '@studio-freight/compono'
import { Layout } from 'layouts/default'
import s from './home.module.scss'

import LottieFile from '/public/lotties/animation.json'

export default function Home() {
  return (
    <Layout theme="light">
      <section className={s.content}>
        <p>hi</p>
        <Lottie animation={LottieFile} loop />
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
