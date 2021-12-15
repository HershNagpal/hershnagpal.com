import React from 'react'
import {Icon} from '../src/components/Icon'
import {Taskbar} from './components/Taskbar'
import {Window} from './components/Window'
import {AnimationComponents} from './components/AnimationComponents'
import {iconData} from './iconData'
import {baseTaskbarState} from './taskbarState'
import {baseWindowState} from './windowState'
import './styles/style.css'
import background from './assets/images/blisscompress.jpg'

function App() {
  const icons = iconData

  const [taskbarState, updateTaskbar] = React.useState(baseTaskbarState)
  const [startMenuState, toggleStartMenu] = React.useState(false)
  const [windowState, updateWindowState] = React.useState(baseWindowState)

  return (
    <div className="App">

      {/* <img src={background} alt="" className="backgroundImage"/> */}
      {/* <div id="movingGradient"/> */}

      <AnimationComponents/>

      {
        // if (icons !== null) {}
        icons.map((icon, index) => (
            <Icon 
              key={index}
              id={icon.id}
              taskbarState={taskbarState}
              updateTaskbar={updateTaskbar}
            />
        ))
      }
      
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