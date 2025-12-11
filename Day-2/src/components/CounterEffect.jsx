import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

    const [count,setCount] = useState(0)

    const handleClick = ()=>{
        setCount(prev => prev + 1)
    }

    useEffect(()=>{
        document.title = `Count is ${count}`
    },[count])

  return (
    <div>
      <button onClick={handleClick}>Incremenet</button>
    </div>
  )
}

export default CounterEffect
