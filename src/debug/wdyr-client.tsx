'use client'
import React from 'react'

// Dev-only instrumentation for re-render analysis
if (process.env.NODE_ENV === 'development') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      trackHooks: true,
      collapseGroups: true,
      include: [
        /Card$/, // memoized Card
        /CardGrid/,
        /HeaderContainer/,
        /Search$/,
        /SearchInfo/,
        /ContainerSeen/,
        /ContainerHome/,
      ],
      exclude: [/^Image$/, /Link/],
    })
  } catch {
    // Package not installed: silently skip
  }
}

export default function WdyrClient() {
  return null
}

