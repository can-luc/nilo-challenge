import { ButtonHTMLAttributes, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

const button = tv({
  base: ' font-semibold flex items-center gap-2 font-poppins bg-blue-500 text-white rounded-full active:opacity-80 py-2 px-2',
  variants: {
    color: {
      primary: 'bg-classic text-white hover:bg-blue-600',
      secondary: 'bg-purple-500 text-white',
      clear:
        'bg-white text-scarlet border border-scarlet gap-4 shadow-[0_4px_8px_0_rgba(100,116,139,0.25)] hover:bg-grayLight active:bg-grayLight',
    },
    size: {
      s: 'text-[10px] w-[93px] h-[32px]',
      sm: 'text-xs',
      md: 'text-base gap-4',
      lg: 'px-4 py-3 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'clear'
  size?: 'sm' | 'md' | 'lg' | 's'
  children: ReactNode
}

export function Button({
  color = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button className={button({ color, size, className })} {...props}>
      {children}
    </button>
  )
}
