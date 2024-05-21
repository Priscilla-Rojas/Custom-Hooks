import { useState } from "react"

export const useCounter = (inicialValue = 1)=>{

  const [counter, setCounter] = useState( inicialValue)

  const increment = ( value = 1)=>{
    setCounter( current => current + value);
  }
  const decrement = ( value = 1)=>{
    if(counter < 1 ) return
    setCounter(  current => current - value);
  }
  const reset = () =>{
    setCounter( inicialValue )
  }

  return{
    counter,
    increment,
    decrement,
    reset
  }
  
}