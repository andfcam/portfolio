import React, { Component } from "react";
import styles from "./SearchBar.module.scss";

class SearchBar extends Component {
    render() {
        return (
            <input
                className={styles.SearchBar}
                type="text"
                name="search"
                placeholder={this.props.placeHolder}
                value={this.props.searchText}
                onChange={this.props.onChange}
            />
        );
    }
}

export default SearchBar;
