import { useState } from "react";
import DoubleCounter from "./DoubleCounter";
// const App = () =>{

//   const [count, setCount] = useState(0);
//   const increment = ()=>{
//     setCount(count + 1);
//     console.log(count);
//   }

//   return (
//     <>
//     <p>you clicked {count} times</p>
//     <button onClick={increment}>click me</button>
//     </>
//   )
// }
// export default App;

// const App = () => {

//   const [isVisible, setIsVisible] = useState(true);
//   const toggle = () => {
//     setIsVisible(!isVisible);
//   }
//   return(
//     <>
//     {isVisible && <p>this is toggable Message</p>
// }
//     <button onClick={toggle} > {isVisible ? 'Hide' : 'Show'} Message</button>
//     </>
//   )
// }




const App = () => {

  
  return (
    <>
    <DoubleCounter/>
    </>
  )
}

export default App;