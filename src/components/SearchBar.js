import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      searchResult: "",
    };
  }

  onSearch = async () => {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/states/current.json"
    );
    console.log(data);
    this.setState({ searchResult: data });
  }; // you get the respone from this function

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({
      value: "",
    });

    if (this.state.value.length > 0) {
      this.onSearch();
    }

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
