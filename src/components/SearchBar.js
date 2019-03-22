import React, { Component } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: props.searchData
    };
  }
  onFormSubmit = formData => {
    console.log("form data in sb", formData);
  };
  render() {
    return (
      <div>
        <Search
          categories={this.state.searchData.categories}
          onFormSubmit={this.onFormSubmit}
        />
        <SearchResults />
      </div>
    );
  }
}
