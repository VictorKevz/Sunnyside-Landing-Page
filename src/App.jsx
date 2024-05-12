import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home/Home'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import "../src/App.css"

function App() {

  return (
    <main className="wrapper">
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
