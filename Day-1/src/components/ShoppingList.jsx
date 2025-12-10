import React, { useRef, useState } from 'react'

const ShoppingList = () => {

    const [list, setList] = useState([{ name: "Macbook Pro", quantity: 10 }]);

    const nameInput = useRef()
    const quantityInput = useRef()

    const handleClick = ()=>{
        setList([...list,{name: nameInput.current.value, quantity: quantityInput.current.value}])
        nameInput.current.value = ''
        quantityInput.current.value = ''
    }
    let sick;
    return (
        <div>
            <ul>
                {list.map(e => <li>Name: {e.name} || Quantity: {e.quantity}</li>)}
            </ul>
            <input ref={nameInput} type="text" value={sick} placeholder='Enter Item Name...' />
            <input ref={quantityInput} type="number" placeholder='Enter Quantity...' />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default ShoppingList
