import React, { useRef } from 'react'

const FocusInput = () => {
    const input = useRef()
    const focusI = ()=>{
        input.current.focus();
    }
  return (
    <div>
      <input type="text" ref={input} placeholder='This will get Focused' />
      <button onClick={()=> focusI()}>Focus</button>
    </div>
  )
}

export default FocusInput
