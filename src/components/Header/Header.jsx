import './Header.css'
import { useEffect, useState } from 'react'

export default function Header() {
  const [date, setDate] = useState(new Date())
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date()
      setDate(currentDate)
      
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formattedDate = date.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
  const mondayOffset = (date.getDay() + 6) % 7
  const weekDates = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(date)
    day.setDate(date.getDate() - mondayOffset + index)
    return day.getDate()
  })
  const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

  return (
    <header className="header">
      <div className="header-title">
        <h3>Habits Track</h3>
        <div className="header-date">
          <p>{formattedDate.charAt(0).toLocaleUpperCase('ru-RU') + formattedDate.slice(1)}</p>
        </div>
        <h2>Сегодня</h2>
      </div>
      <div className="header-items">
        {weekdays.map((weekday, index) => (
          <div className={`element item ${index + 1}`} key={weekday}>
            <p>{weekday}</p>
            <h3>{weekDates[index]}</h3>
          </div>
        ))}
      </div>
    </header>
  )
}
