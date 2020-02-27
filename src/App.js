import React from 'react'
import Icon from '../src/components/Icon'
import Taskbar from './components/Taskbar'
import data from './data'
import './styles/style.css'

function App() {
  const iconData = data
  return (
    <div className="App">
      {iconData.map((icon, key) => (
        <Icon key={key} iconText={icon.title} iconImage={icon.icon} link={icon.link} />
      ))}
      <Taskbar/>
    </div>
  )
}

export default App