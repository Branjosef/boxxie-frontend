import React from 'react';

const SignUpForm = ({ loginHandler }) => {

  return (
    <form onSubmit={loginHandler}>
      <div className="form-group user-form-group">

        <label for="username" className="label">Username</label>
        <input type="text" className="form-control mb-2" name="username" />

        <label for="firstname" className="label ">First Name</label>
        <input type="text" className="form-control mb-2" name="firstname" />

        <label for="lastname" className="label">Last Name</label>
        <input type="text" className="form-control mb-2" name="lastname" />

        <label for="email" className="label">Email Address</label>
        <input type="text" className="form-control" name="email" />
        <small id="emailHelp" class="form-text text-muted mb-2">We'll never share your email with anyone else.</small>

        <label for="password" className="label">Password</label>
        <input type="password" className="form-control mb-2" name="password" />

        <label for="birthday" className="label">Birthday</label>
        <input type="date" className="form-control mb-2" name="birthday" />
        <div className="center-align">
          <button type="submit" className="btn btn-danger mt-4 col-5 center">Create Account</button>
        </div>
      </div>
    </form >
  )
}

export default (SignUpForm)