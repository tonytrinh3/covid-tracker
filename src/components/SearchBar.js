import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({
      value: "",
    });
    console.log(this.state.value);
    event.preventDefault(); //this is to avoid page from refreshing when you press submit
  };

  render() {
    return (
      <div className="search-bar margin-around-large">
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          {/* <button onClick = {this.handleSubmit} >Submit</button> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
