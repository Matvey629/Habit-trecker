import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header.jsx'
import Button from './components/Button/Button.jsx'
import MainSection from './components/MainSection/MainSection.jsx'

export default function App() {


  return (
    <>
      <Header />
      <main>
        <MainSection />
      </main>
    </>
  )
}
