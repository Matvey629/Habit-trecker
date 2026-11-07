import './MainSection.css'
import { useState } from 'react'

export default function MainSection({ className = '', children, ...props }) {
  const [habits, setHabits] = useState([
  { id: 1, name: "Прочитать 20 страниц", done: false },
  { id: 2, name: "Тренировка", done: false },
  ])
  
  
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

      </main>
      {/* Button component can be added here if needed */}
    </section>
  )
}
