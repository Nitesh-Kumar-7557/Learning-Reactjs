import React, { useRef, useState } from 'react'

const TodoList = () => {

    const [todoList,setTodoList] = useState(["Hii"])
    const input = useRef()
    const handleClick = ()=>{
        setTodoList([...todoList,input.current.value]);
        input.current.value = ''
    }

  return (
    <div>
        <ul>{todoList.map(e => <li>{e}</li>)}</ul>
        <input ref={input} type="text" placeholder='Add new Todo' />
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoList
