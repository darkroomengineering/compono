import React from 'react'
import { ClientOnly, ServerOnly } from './index'

export default {
  title: 'Isomorphic',
}

export const ClientOnlyComponent = () => (
  <ClientOnly>
    <div>This component is only rendered on the client.</div>
  </ClientOnly>
)

export const ServerOnlyComponent = () => (
  <ServerOnly>
    <div>This component is only rendered on the server.</div>
  </ServerOnly>
)
