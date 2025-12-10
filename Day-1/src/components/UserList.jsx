import React from 'react'

const UserList = () => {

    const users = [
        { id: 1, name: "Nitesh", age: 17},
        { id: 2, name: "Minnie", age: 2},
        { id: 3, name: "Pranjal", age: 18},
    ]

  return (
    <div>
      {
        users.map( ({id,name,age}) => (
            <div key={id}>{name} , {age}</div>
        ))
      }
    </div>
  )
}

export default UserList


