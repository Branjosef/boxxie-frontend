import React, { Component } from 'react'

const ProfileComponent = ({ component }) => {
  return (
    <div className="profile-component">
      <h4 className="profile-component-title">{component.title}</h4>
      <p className="profile-components-description">{component.description}</p>
    </div>
  )
}

export default (ProfileComponent)