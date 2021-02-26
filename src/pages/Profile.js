import React from 'react';
import '../styles/profilePage.css';
import ProfileCard from '../components/profilePageComponents/ProfileCard'

let profileComponents = [
  { title: "Your Orders", description: "Track, return, or buy things again" },
  { title: "Login & Security", description: "Edit login, name, and mobile number" },
  { title: "Your Payments", description: "Manage payment methods and settings" }
]

class Profile extends React.Component {

  clickHandler = (title) => {
    console.log(title)
  }

  renderProfileCards = () => {
    return profileComponents.map(c => {
      return <ProfileCard key={c.title} component={c} />
    })
  }


  render() {
    return (
      <div className="container-fluid profile-container">
        <h1>Your Account</h1>
        <div className="profile-card-container">
          {this.renderProfileCards()}
        </div>

      </div>
    )
  }
}

export default (Profile)