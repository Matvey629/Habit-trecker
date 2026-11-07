import './Button.css'

export default function Button({
  children,
  isActive = false,
  className = '',
  ...props
}) {
  const classes = ['button', isActive && 'button--active', className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
