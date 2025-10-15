import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'clear'
  size?: 'sm' | 'md' | 'lg' | 's'
  children: ReactNode
}
