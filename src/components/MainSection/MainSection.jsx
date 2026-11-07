import './MainSection.css'

export default function MainSection({ children, className = '', ...props }) {
  return (
    <section className={`main-section ${className}`.trim()} {...props}>
      {children}
    </section>
  )
}
