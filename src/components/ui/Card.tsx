import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export default function Card({ children, className = '', dark = false }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-md)] overflow-hidden ${className}`}
      style={{
        backgroundColor: dark ? 'var(--color-dark-surface)' : 'var(--color-surface)',
        border: dark ? 'none' : '1px solid var(--color-border)',
      }}
    >
      {children}
    </div>
  )
}
