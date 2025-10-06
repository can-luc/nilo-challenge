import { tv } from 'tailwind-variants';

const badge = tv({
  base: 'font-semibold flex items-center font-poppins text-white rounded-full py-2 px-6 leading-[1.21]',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white',
      orange: 'bg-orange-500 text-white',
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
});

type BadgeProps = BadgeHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
};

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
  );
}
