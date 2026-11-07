import './Footer.css'

export default function Footer({ children, className = '', ...props }) {
  return (
    <footer className={`footer ${className}`.trim()} {...props}>
      {children}
    </footer>
  )
}
