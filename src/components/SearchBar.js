import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCovidAPICases } from "../actions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      searchResult: "",
      errorResults: false,
    };
  }

  onSearch = async () => {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/states/current.json"
    );

    console.log(this.state.searchResult);

    data.map((state) => {
      //this is to filter through all results by search term
      if (this.state.searchResult == state["state"]) {
        this.props.getCovidAPICases(state);
        this.setState({ errorResults: false });
        console.log(this.state.errorResults)
      }
      return this.setState({ errorResults: true });
    });

    console.log(data[0]["state"] == this.state.searchResult);
  }; // you get the respone from this function

  errorHandler = () => {

    if (this.state.errorResults) {
      return <p className="error">No results. Please check your input</p>;
    } else if (!this.state.errorResults){
      return null;
    }
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({
      searchResult: this.state.value.toUpperCase(),
      value: "",
    });

    if (this.state.value.length > 0) {
      this.onSearch();
    }

    event.preventDefault(); //this is to avoid page from refreshing when you press submit
  };

  render() {
    return (
      <div className="search-bar">
        <p className="">Search by State Initials for COVID Cases</p>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          {/* <button onClick = {this.handleSubmit} >Submit</button> */}
          <input type="submit" value="Submit" />
        </form>
        {this.state.errorResults? <p className="error">No results. Please check your input</p> : null}
      </div>
    );
  }
}

export default connect(null, { getCovidAPICases })(SearchBar);
