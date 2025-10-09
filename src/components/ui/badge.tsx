import { tv } from 'tailwind-variants'
import { ButtonHTMLAttributes, ReactNode } from 'react'

const badge = tv({
  base: 'font-semibold flex items-center font-poppins text-white rounded-full py-2 px-6 leading-[1.21]',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white',
      orange: 'bg-orange-500 text-white',
      green: 'bg-green-500 text-white',
      red: 'bg-red-500 text-white',
      yellow: 'bg-yellow-500 text-white',
      gray: 'bg-gray-500 text-white',
      black: 'bg-black text-white',
      white: 'bg-white text-black border border-gray-300',
      purple: 'bg-purple-500 text-white',
      brown: 'bg-yellow-800 text-white',
      blue: 'bg-blue-800 text-white',
      pink: 'bg-pink-500 text-white',
      cyan: 'bg-cyan-500 text-white',
      indigo: 'bg-indigo-500 text-white',
      teal: 'bg-teal-500 text-white',
    },
    size: {
      s: 'text-[11px]',
      sm: 'text-xs',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg',
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})

type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?:
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
    | undefined
  size?: 'sm' | 'md' | 'lg' | 's'
  children: ReactNode
}

export type BadgeColor = BadgeProps['color']

export function Badge({
  color = 'primary',
  size = 'sm',
  children,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <button className={badge({ color, size, className })} {...props}>
      {children}
    </button>
  )
}
