import { useReducer } from "react";

const initialState = {count1 : 0, count2 : 0, }


const reducer = (state, action) => {
    switch(action.type){
        case 'incrementA':
            return {...state, count1: state.count1 + 1}
        case 'decrementA':
            return {...state,count1: state.count1 - 1}
         case 'incrementB':
            return {...state,  count2: state.count2 + 1}
        case 'decrementB':
            return {...state, count2: state.count2 - 1}
        case 'reset':
            return initialState
        default:
            return state;
    }
}


const DoubleCounter = () =>{
    const [state, dispatch] = useReducer(reducer, initialState)
return(
<div>
         <h2>Double Counter</h2>
        <h3>Count A: {state.count1}</h3>
    <button onClick={()=>dispatch({type: 'incrementA'})}>A+</button>
    <button onClick={()=>dispatch({type: 'decrementA'})}
    disabled={state.count1 === 0}
        >A-</button>
    
        <h2>Count B: {state.count2}</h2>
    <button onClick={()=>dispatch({type: 'incrementB'})} >B+</button>
    <button onClick={()=>dispatch({type: 'decrementB'})}
    disabled={state.count2 === 0}
        >B-</button> <br />

    <button onClick={()=>dispatch({type: 'reset'})}>Reset Both</button>
    

</div>
)
}

export default DoubleCounter