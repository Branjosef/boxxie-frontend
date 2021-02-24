import React from 'react';
import '../styles/loginPage.css'


class Login extends React.Component {

  state = {
    error: null
  }

  loginHandler = (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
    console.log(e.target.password.value)
  }



  render() {
    return (
      <>
        <div className="container-fluid">
          banner
        </div>
        <div className="container-fluid formContainer">
          <div className="container col-6 loginForm mt-5 mb-5">
            <div className="edit-form">
              <h2 className="mb-2 pb-2"><i className="material-icons-outlined">lock</i>Returning Customer</h2>
              {<h4 style={{ color: 'red' }}>{this.state.error}</h4>}
              <form onSubmit={this.loginHandler}>
                <div className="form-group user-form-group">
                  <input type="text" className="form-control mt-4 mb-2" name="email" placeholder="email address" />

                  <input type="password" className="form-control mb-1" name="password" placeholder="password" />

                  <button type="submit" className="btn btn-danger mt-4 mb-3">Login</button>

                </div>
              </form>

            </div>
          </div>

        </div>



      </>
    )
  }
}

export default (Login)