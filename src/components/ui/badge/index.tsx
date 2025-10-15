import React from 'react'

import { BadgeProps } from './types'
import { badgeVariants } from './variants'

const Badge: React.FC<BadgeProps> = ({
  color = 'primary',
  size = 'sm',
  children,
  className = '',
  ...props
}) => {
  return (
    <button className={badgeVariants({ color, size, className })} {...props}>
      {children}
    </button>
  )
}
export { Badge }
