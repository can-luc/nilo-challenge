import React from 'react'

import { ButtonProps } from './types'
import { buttonVariant } from './variant'

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={buttonVariant({
        color,
        size,
        className,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
export { Button }
