import { Link } from '../link'

export function Button({ children, href, className, ...props }) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
