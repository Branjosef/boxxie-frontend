import React, { Component } from 'react'

const ProfileCard = ({ component }) => {
  return (
    <div className="profile-card">
      <h4>{component.title}</h4>
      <p>{component.description}</p>
    </div>
  )
}

export default (ProfileCard)