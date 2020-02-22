import React from 'react'
import Icon from '../src/components/Icon'
import Taskbar from './components/Taskbar'
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Icon iconImage={"/images/icons/txt.png"} iconText={"textxtxtxtxtxtxt.txt"} />
      <Icon iconImage={"/images/icons/doc.png"} iconText={"text.pdf"} />
      <Taskbar/>
    </div>
  )
}

export default App