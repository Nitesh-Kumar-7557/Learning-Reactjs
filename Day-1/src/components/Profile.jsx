import React, { useRef, useState } from 'react'

const Profile = () => {

    const [profileData,setProfileData] = useState({name: "Nitesh", age: 18});
    
    const nameInput = useRef()
    const ageInput = useRef()

    const changeName = ()=> {
        setProfileData({...profileData, name: nameInput.current.value });
        nameInput.current.value = ''
    }
    
    const changeAge = ()=> {
        setProfileData({...profileData, age: ageInput.current.value });
        ageInput.current.value = ''
    }

  return (
    <div>
      <p>Name: {profileData.name}</p>
      <p>Age: {profileData.age}</p>

      <input ref={nameInput} type="text" placeholder='Enter New Name' />
      <button onClick={changeName}>Change Name</button>

      <br />

      <input ref={ageInput} type="number" placeholder='Enter New Age' />
      <button onClick={changeAge}>Change Age</button>
    </div>
  )
}

export default Profile
