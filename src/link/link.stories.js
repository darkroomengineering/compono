import React from 'react'
import { Link } from './index'

export default {
  title: 'Link',
  component: Link,
}

export const InternalLink = () => <Link href="/about">About Us</Link>

export const ExternalLink = () => <Link href="https://example.com">Visit Example.com</Link>

export const EmailLink = () => <Link href="mailto:info@example.com">Email Us</Link>

export const AnchorLink = () => <Link href="#section">Jump to Section</Link>

export const ButtonLink = () => <Link onClick={() => alert('Button clicked!')}>Click Me</Link>
