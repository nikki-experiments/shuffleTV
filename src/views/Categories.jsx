import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

class Categories extends Component {
  handleCreateCategory = () => {
    console.log("hi there");
  };

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Homepage</Link>
        </nav>
        <h1>My Categories</h1>
        <Button
          text="Create New Category"
          handleClick={this.handleCreateCategory}
        />
      </div>
    );
  }
}

export default Categories;
