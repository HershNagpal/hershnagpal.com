import React from 'react'
import Icon from '../src/components/Icon'
import Taskbar from './components/Taskbar'
import './styles/style.css';
import './styles/crt.css';
import TextFileIcon from './assets/images/icons/txt.png';
import DocumentFileIcon from './assets/images/icons/doc.png';
import data from './data'
import './styles/style.css'

function App() {
  const iconData = data
  return (
    // <div className="App crt">
    //   <Icon iconImage={TextFileIcon} iconText={"textxtxtxtxtxtxt.txt"} />
    //   <Icon iconImage={DocumentFileIcon} iconText={"text.pdf"} />
    <div className="App">
      {iconData.map((icon, key) => (
        <Icon key={key} iconText={icon.title} type={icon.type} link={icon.link} />
      ))}
      <Taskbar/>
    </div>
  )
}

export default App