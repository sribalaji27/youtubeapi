import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault(); //If we dont have this statement, browser automatically submits the form

    //TODO: Make sure we call callback in Parent component from Child component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>YouTube Search</label>
            <input
              onChange={this.onInputChange}
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
