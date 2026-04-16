interface StatCardProps {
  value: string
  label: string
  dark?: boolean
}

export default function StatCard({ value, label, dark = false }: StatCardProps) {
  return (
    <div
      className="flex flex-col gap-1 p-6 rounded-[var(--radius-md)]"
      style={{
        backgroundColor: dark ? 'var(--color-dark-surface)' : 'var(--color-surface)',
        color: dark ? 'var(--color-dark-text)' : 'var(--color-text)',
        border: dark ? 'none' : '1px solid var(--color-border)',
      }}
    >
      <span
        className="text-4xl font-bold"
        style={{ fontFamily: 'var(--font-display)', color: dark ? 'var(--color-dark-text)' : 'var(--color-text)' }}
      >
        {value}
      </span>
      <span
        className="text-sm"
        style={{ color: dark ? 'rgba(240,237,228,0.7)' : 'var(--color-text-muted)' }}
      >
        {label}
      </span>
    </div>
  )
}
