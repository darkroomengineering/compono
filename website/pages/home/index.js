import { Layout } from '../../layouts/default'
import s from './home.module.scss'

export default function Home() {
  return (
    <Layout theme="light">
      <div className={s.wrapper}>
        <h1>this is a bit of text</h1>
      </div>
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
