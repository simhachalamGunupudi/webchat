import React, { Component } from "react";
import "./Search.css";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.categories[0],
      search: "",
      categories: props.categories
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = () => {
    this.props.onFormSubmit({
      category: this.state.category,
      search: this.state.search
    });
  };
  render() {
    const { category, search } = this.state;
    return (
      <div className="nav-search">
        <form>
          <div className="form-group">
            <select name="category" onChange={this.onChange}>
              {this.state.categories.map(option => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              placeholder="Search"
              name="search"
              onChange={this.onChange}
            />
            {"  "}
            <i
              className="fas fa-search"
              style={{ cursor: "pointer" }}
              onClick={this.submitForm}
            />
          </div>
        </form>
      </div>
    );
  }
}
