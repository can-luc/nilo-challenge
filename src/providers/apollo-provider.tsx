'use client'
import React from 'react'

import { ApolloProvider } from '@apollo/client'

import { apolloClient } from 'src/lib/apollo/apollo-client'

interface ApolloWrapperProps {
  children: React.ReactNode
}
export default function ApolloWrapper({ children }: ApolloWrapperProps) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
