import { Button, Marquee } from '../../../dist/compono.es'

export default function Home() {
  return (
    <main>
      <p>hi</p>
      <Marquee />
      <Button href="https://arzafran.co">This is a button</Button>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
