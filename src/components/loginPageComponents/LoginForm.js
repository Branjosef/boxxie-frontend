import React from 'react';

const LoginForm = ({ loginHandler }) => {

  return (
    <form onSubmit={loginHandler}>
      <div className="form-group user-form-group">
        <label for="email" className="label align-left">Email Address</label>
        <input type="text" className="form-control mb-2" name="email" />
        <label for="password" className="label">Password</label>
        <input type="password" className="form-control mb-2" name="password" />
        <div className="center-align">
          <button type="submit" className="btn btn-danger mt-4 col-5 mx-auto">Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default (LoginForm)