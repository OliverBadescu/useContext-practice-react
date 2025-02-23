import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import { PlayerProvider } from './service/state/PlayerContext'

function App() {


  return (
    <>
      <PlayerProvider>
           <Home/>
      </PlayerProvider>
     
    </>
  )
}

export default App
