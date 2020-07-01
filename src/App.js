import React from 'react'
import {Icon} from '../src/components/Icon'
import {Taskbar} from './components/Taskbar'
import {Window} from './components/Window'
import {StartMenu} from './components/StartMenu'
import {iconData} from './iconData'
import {baseTaskbarState} from './taskbarState'
import './styles/style.css'
import './styles/crt.css'
import './styles/style.css'

function App() {
  const icons = iconData

  const [taskbarState, updateTaskbar] = React.useState(baseTaskbarState);
  const [startMenuState, toggleStartMenu] = React.useState(false);

  return (
    <div className="App">
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
          />
      ))}
      
      <Taskbar updateTaskbar={updateTaskbar} taskbarState={taskbarState} toggleStartMenu={toggleStartMenu} startMenuState={startMenuState} />
    </div>
  )
}

export default App