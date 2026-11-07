import './MainSection.css'
import { useState } from 'react'
import Button from '../Button/Button'
import EffectSection from '../EffectSection/EffectSection'
export default function MainSection({ className = '', ...props }) {
  const habits = [
    { id: 1, name: 'Прочитать 20 страниц', done: false },
    { id: 2, name: 'Тренировка', done: false },
  ]
  const [tab, setTab] = useState(false)
  
  return (
    <section className={`main-section ${className}`.trim()} {...props}>
      <div className="main-section-progress">
        <p>
          Выполнено
        </p>
        <span>
          {2} из {4} привычек
        </span>
        
      </div>
      
     
      <main>
        <div className="main-section-habits">
        {habits.map((elem) =>(
          <div className={`element habit ${elem.done ? 'done' : ''}`} key={elem.id}>
            <Button className="habit-toggle" />
            <p>
              {elem.name}
            </p>
            
          </div>
        ))}
        </div>
      </main>
      <div className="habit-add">
        <Button onClick={() => setTab(true)}>Добавить</Button>
      </div>
      {tab && <EffectSection />}
    </section>
  )
}
