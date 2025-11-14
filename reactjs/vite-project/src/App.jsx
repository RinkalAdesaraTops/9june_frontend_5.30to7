import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import ClassExample from './ClassExample'
import LifecycleClass from './LifecycleClass'
import Usercomponent from './Usercomponent'
import Empcomponent from './Empcomponent'

function App() {
  return (
    <>
        <h3>Vite Project</h3>
        {/* <ClassExample /> */}
        {/* <LifecycleClass myname="test" /> */}
        {/* <Usercomponent /> */}
        <Empcomponent />
    </>
  )
}
export default App
