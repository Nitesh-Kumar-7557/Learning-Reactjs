import React, { useEffect, useState } from 'react'

const ProfileData = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState(null)
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const res2 = await res.json()
            setLoading(false)
            setData(res2);
        }
        fetchData();
    },[])
  return (
    <div>
      {loading && <p>Loading...</p>}
      {data && <h1>{data.name}</h1>}
    </div>
  )
}

export default ProfileData
