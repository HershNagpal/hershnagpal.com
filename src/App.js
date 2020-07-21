import React from 'react'
import {Icon} from '../src/components/Icon'
import {Taskbar} from './components/Taskbar'
import {Window} from './components/Window'
import {iconData} from './iconData'
import {baseTaskbarState} from './taskbarState'
import {baseWindowState} from './windowState'
// import './styles/animations.css'
import './styles/style.css'
import './styles/crt.css'
import './styles/style.css'
import background from './assets/images/bliss.png'

function App() {
  const icons = iconData

  const [taskbarState, updateTaskbar] = React.useState(baseTaskbarState)
  const [startMenuState, toggleStartMenu] = React.useState(false)
  const [windowState, updateWindowState] = React.useState(baseWindowState)

  console.log("yee")

  return (
    <div className="App">
      
      <div className="crt"/>
      <img src={background} className="backgroundImage"/>

      {icons.map((icon, index) => (
        index===0 ? null : 
          <Icon 
            key={index}
            id={icon.id}
            taskbarState={taskbarState}
            updateTaskbar={updateTaskbar}
          />
      ))}
      {taskbarState.map((task, index) => (
        <Window
          key={index}
          id={task.id}
          taskbarState={taskbarState}
          updateTaskbar={updateTaskbar}
          windowState={windowState}
          updateWindowState={updateWindowState}
        />
      ))}
      
      <Taskbar 
        updateTaskbar={updateTaskbar} 
        taskbarState={taskbarState} 
        toggleStartMenu={toggleStartMenu} 
        startMenuState={startMenuState} 
      />
    </div>
  )
}

export default App