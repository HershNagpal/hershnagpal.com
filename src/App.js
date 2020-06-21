import React from 'react'
import Icon from '../src/components/Icon'
import Taskbar from './components/Taskbar'
import './styles/style.css';

import TextFileIcon from './assets/images/icons/txt.png';
import DocumentFileIcon from './assets/images/icons/doc.png';

function App() {
  return (
    <div className="App">
      <Icon iconImage={TextFileIcon} iconText={"textxtxtxtxtxtxt.txt"} />
      <Icon iconImage={DocumentFileIcon} iconText={"text.pdf"} />
      <Taskbar/>
    </div>
  )
}

export default App