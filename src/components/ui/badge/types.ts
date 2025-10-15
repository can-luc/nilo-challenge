import { ButtonHTMLAttributes, ReactNode } from 'react'

export type BadgeColor =
  | 'primary'
  | 'secondary'
  | 'orange'
  | 'green'
  | 'red'
  | 'yellow'
  | 'gray'
  | 'black'
  | 'white'
  | 'purple'
  | 'brown'
  | 'blue'
  | 'pink'
  | 'cyan'
  | 'indigo'
  | 'teal'

export type BadgeSize = 's' | 'sm' | 'md' | 'lg'

export type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: BadgeColor
  size?: BadgeSize
  children: ReactNode
}
