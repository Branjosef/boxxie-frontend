import React from 'react';
import '../styles/signInPage.css';
import LoginForm from '../components/loginPageComponents/LoginForm';
import SignUpForm from '../components/loginPageComponents/SignUpForm'


class SignIn extends React.Component {

  state = {
    error: null,
    register: false,
  }

  loginHandler = (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
    console.log(e.target.password.value)
  }

  userHandler = () => {
    this.setState({
      register: !this.state.register
    })
  }

  render() {
    return (
      <div className="container-fluid formContainer">
        {this.state.register ? <h3 className="sign-in-title"><i className="material-icons lock-icon">lock</i> Secure Registration</h3> :
          <h3 className="sign-in-title"><i className="material-icons lock-icon">lock</i> Secure Sign In</h3>
        }
        <div className="container col-6 loginForm">
          <div className="edit-form">
            {<h4 style={{ color: 'red' }}>{this.state.error}</h4>}
            {this.state.register ? <SignUpForm loginHandler={this.loginHandler} /> :
              <LoginForm loginHandler={this.loginHandler} />
            }
            <div className="pb-3 center-align">
              {this.state.register ? <button onClick={this.userHandler} className="user-btn">Already a registered user? Click here</button> :
                <button onClick={this.userHandler} className="user-btn">No account yet? Create One</button>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default (SignIn)