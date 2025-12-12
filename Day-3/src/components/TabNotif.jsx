import React, { useEffect, useState } from 'react'

const TabNotif = () => {

    const [count,setCount] = useState(0)

    useEffect(()=>{
        if(count===0){
            document.title = "React App";
        }
        else{
            document.title = `(${count}) New Notifications`;
        }
    },[count])
    

  return (
    <div>
      <button onClick={()=> setCount(prev => prev + 1)}>Click me</button>
    </div>
  )
}

export default TabNotif
