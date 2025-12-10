import React from 'react'

const ProfileCard = () => {
    const styles = {
        backgroundColor: "gray",
        padding: "15px",
        borderRadius: "8px",
        color: "black"
    }

  return (
    <div style={styles}>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  )
}

export default ProfileCard
