import { Lenis } from '@studio-freight/react-lenis'
import cn from 'clsx'
import s from './layout.module.scss'

export function Layout({
  seo = { title: '', description: '', image: '', keywords: '' },
  children,
  theme = 'light',
  className,
}) {
  return (
    <>
      <Lenis root>
        <div className={cn(`theme-${theme}`, s.layout, className)}>
          <main className={s.main}>{children}</main>
        </div>
      </Lenis>
    </>
  )
}
