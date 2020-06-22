import React from 'react'
import {Icon} from '../src/components/Icon'
import {Taskbar} from './components/Taskbar'
import {Window} from './components/Window'
import './styles/style.css'
import './styles/crt.css'
import {iconData, iconImageMap} from './iconData'
import './styles/style.css'

function App() {
  const icons = iconData

  // const [taskbarState, updateTaskbar] = React.useState(sampleDeckState);

  return (
    // <div className="App crt">
    //   <Icon iconImage={TextFileIcon} iconText={"textxtxtxtxtxtxt.txt"} />
    //   <Icon iconImage={DocumentFileIcon} iconText={"text.pdf"} />
    <div className="App">
      {icons.map((icon, index) => (
        <Icon key={index} iconText={icon.title} id={icon.id} link={icon.link} />
      ))}
      <Window/>
      <Taskbar/>
    </div>
  )
}

export default App