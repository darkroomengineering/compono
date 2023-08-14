import { Layout } from 'layouts/default'
import { Accordion, Image } from '../../../src'
import s from './home.module.scss'

export default function Home() {
  return (
    <Layout theme="light">
      <section className={s.content}>
        <Accordion type="single" collapsible={true} className={s.accordion}>
          {[{ trigger: 'click me', content: 'show me' }].map(
            ({ trigger, content }, idx) => (
              <Accordion.Item
                key={`accordion-item-${idx}`}
                value={`accordion-item-${idx}`}
                className={s.item}
              >
                <Accordion.Trigger className={s.trigger}>
                  <p>{trigger}</p>
                </Accordion.Trigger>
                <Accordion.Content className={s.content}>
                  <p>{content}</p>
                </Accordion.Content>
              </Accordion.Item>
            ),
          )}
        </Accordion>
      </section>
      <section>
        <Image
          src="https://assets.studiofreight.com/devs/franco.png"
          alt=""
          fill
        />
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
