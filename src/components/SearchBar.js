import React, { Component } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: props.searchData,
      searchResult: []
    };
  }
  onFormSubmit = formData => {
    console.log("form data in sb", formData.category);
    const search = formData.search;
    let allData = [];
    let updatedList = this.state.searchData;
    console.log("updated list", updatedList);
    // switch (formData.category) {
    //   case "All":
    //     for (var key in updatedList) {
    //       if (key != "categories") {
    //         allData = allData.concat(updatedList[key]);
    //       }
    //     }
    //     allData = allData.filter(list => {
    //       return list.name.toLowerCase().includes(search.toLowerCase());
    //     });
    //     this.setState({ searchResult: allData });
    //     console.log("allData", allData);
    //   default:
    //     updatedList = updatedList[formData.category.toLowerCase()].filter(
    //       list => {
    //         return list.name.toLowerCase().includes(search.toLowerCase());
    //       }
    //     );
    //     this.setState({ searchResult: updatedList });
    // }
    if (formData.category === "All") {
      for (var key in updatedList) {
        if (key != "categories") {
          allData = allData.concat(updatedList[key]);
        }
      }
      allData = allData.filter(list => {
        return list.name.toLowerCase().includes(search.toLowerCase());
      });
      this.setState({ searchResult: allData });
      console.log("allData", allData);
    } else {
      updatedList = updatedList[formData.category.toLowerCase()].filter(
        list => {
          return list.name.toLowerCase().includes(search.toLowerCase());
        }
      );
      this.setState({ searchResult: updatedList });
    }
  };
  render() {
    return (
      <div>
        <Search
          categories={this.state.searchData.categories}
          onFormSubmit={this.onFormSubmit}
        />
        <SearchResults searchResult={this.state.searchResult} />
      </div>
    );
  }
}
