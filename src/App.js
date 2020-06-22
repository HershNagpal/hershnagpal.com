import React from 'react'
import {Icon} from '../src/components/Icon'
import {Taskbar} from './components/Taskbar'
import {Window} from './components/Window'
import './styles/style.css'
import './styles/crt.css'
import {iconData} from './iconData'
import {baseTaskbarState} from './taskbarState'
import './styles/style.css'

function App() {
  const icons = iconData

  const [taskbarState, updateTaskbar] = React.useState(baseTaskbarState);

  return (
    <div className="App">
      {icons.map((icon, index) => (
        index===0 ? null : <Icon key={index} iconText={icon.title} id={icon.id} link={icon.link} />
      ))}
      <Window/>
      <Taskbar updateTaskbar={updateTaskbar} taskbarState={taskbarState} />
    </div>
  )
}

export default App