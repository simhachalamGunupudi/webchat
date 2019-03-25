import React, { Component } from "react";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: props.searchResult
    };
    console.log("this.state", props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.searchResult !== this.props.searchResult) {
      this.setState({ searchResults: nextProps.searchResult });
      console.log("this.state.searchResults", this.state.searchResults);
    }
  }
  render() {
    return (
      <div>
        {this.state.searchResults.length > 0 ? (
          this.state.searchResults.map(listData => (
            <div
              className="card"
              style={{
                width: "300px",
                height: "250px",
                padding: "40px",
                display: "inline-flex",
                margin:'15px'
              }}
              key={listData.price}
            >
              <div className="card-body">
                <h5 className="card-title">
                  {listData.brand ? <p>{listData.brand}</p> : listData.author}
                </h5>
                <p className="card-text">Price: {listData.price}</p>
                <a href="#" className="btn btn-primary">
                  Purchase
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No results</p>
        )}
      </div>
    );
  }
}
