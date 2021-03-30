import React from 'react';

class Search extends React.Component {

  submitHandler = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <span><i className="material-icons search-icon">search</i></span>
        <input className="searchbar" type="text" name="search" placeholder="Search for anything" />
      </form >
    )
  }
}


export default Search