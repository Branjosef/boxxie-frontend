import React from 'react';
import '../styles/profilePage.css';
import ProfileComponent from '../components/profilePageComponents/ProfileComponent';

let profileComponents = [
  { title: "Your Orders", description: "Track, return, or buy things again" },
  { title: "Profile & Security", description: "Edit login, name, and other account information" },
  { title: "Your Payments", description: "Manage payment methods and settings" },
  { title: "Storefront", description: "Start a storefront or manage existing storefront" }

]

class Profile extends React.Component {

  clickHandler = (title) => {
    console.log(title)
  }

  renderProfileComponents = () => {
    return profileComponents.map(c => {
      return <ProfileComponent key={c.title} component={c} />
    })
  }


  render() {
    return (
      <div className="container-fluid profile-container">
        <div className="profile-component-container">
          {this.renderProfileComponents()}
        </div>

      </div>
    )
  }
}

export default (Profile)