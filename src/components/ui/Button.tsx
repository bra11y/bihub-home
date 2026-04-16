import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm rounded-[var(--radius-sm)]',
    md: 'px-6 py-3 text-sm rounded-[var(--radius-sm)]',
    lg: 'px-8 py-4 text-base rounded-[var(--radius-sm)]',
  }

  const variants: Record<string, string> = {
    primary: 'bg-[var(--color-accent)] text-[var(--color-dark-bg)] hover:bg-[var(--color-accent-dark)] focus-visible:outline-[var(--color-focus)]',
    outline: 'border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] bg-transparent focus-visible:outline-[var(--color-focus)]',
    ghost: 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] bg-transparent focus-visible:outline-[var(--color-focus)]',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
