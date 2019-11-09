import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="Search-bar-area">
        <div>
          <SearchInput updateBooks={this.props.updateBooks} />
        </div>
      </div>
    );
  }
}
