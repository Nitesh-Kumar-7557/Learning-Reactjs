import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [posts,setPosts] = useState([])

    useEffect(()=>{
        async function getData(){
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data =  await res.json();
            setPosts(data)
        }
        getData();

    },[posts])


  return (
    <div>
      <h1>{posts.length > 0 ? posts[0].title: "Loading..."}</h1>
    </div>
  )
}

export default FetchDataEffect
