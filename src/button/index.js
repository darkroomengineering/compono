import { Link } from '../link/index.js'

export function Button({ children, href, className, ...props }) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
