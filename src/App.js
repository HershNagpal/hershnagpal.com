import React from 'react'
import Icon from '../src/components/Icon'
import Taskbar from './components/Taskbar'
import Window from './components/Window'
import './styles/style.css';
import './styles/crt.css';
import iconData from './iconData'
import './styles/style.css'

function App() {
  const icons = iconData
  return (
    // <div className="App crt">
    //   <Icon iconImage={TextFileIcon} iconText={"textxtxtxtxtxtxt.txt"} />
    //   <Icon iconImage={DocumentFileIcon} iconText={"text.pdf"} />
    <div className="App">
      {icons.map((icon, key) => (
        <Icon key={key} iconText={icon.title} type={icon.type} link={icon.link} />
      ))}
      <Window/>
      <Taskbar/>
    </div>
  )
}

export default App