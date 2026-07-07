import { useState } from "react"

const App = () => {

  const [isOn, setIsOn] = useState(true);
  const toggle = () =>{
    setIsOn(!isOn)
  }
  return (
    <>
    <p>the button is {isOn ? 'On' : 'Off'}</p>
    <button onClick={toggle}>{isOn ? 'Turn Off' : 'Turn On'}</button>
    </>
  )
}

export default App;