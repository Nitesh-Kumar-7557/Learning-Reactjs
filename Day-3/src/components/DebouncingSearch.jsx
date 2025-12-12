import React, { useEffect, useState } from 'react'

const DebouncingSearch = () => {
    const [message,setMeassage] = useState('Invalid')
    const [text,setText] = useState('')

    const handleChange = (e)=>{
        setText(e.target.value)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(text[0]==="@"){
                setMeassage("Valid")}
            else{
                setMeassage("Invalid")
            }
        },500)
        
        return ()=>{
            clearTimeout(timer)
        }

    },[text])

  return (
    <div>
      <input type="text" onChange={handleChange} value={text} />
      <h1>{message}</h1>
    </div>
  )
}

export default DebouncingSearch
