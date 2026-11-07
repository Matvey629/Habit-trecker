import Button from "../Button/Button"



export default function EffectSection({ className = '', children, ...props }) {
  console.log('EffectSection rendered')
  return (
    <section className={`effect-section ${className}`.trim()} {...props}>
      <input 
      type="text"
      />
      <Button/>
    </section>
  )
}