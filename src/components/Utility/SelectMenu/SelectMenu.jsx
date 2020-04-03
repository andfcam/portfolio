import React, { Component } from "react";
import styles from "./SelectMenu.module.scss";

export default class SelectMenu extends Component {
    render() {
        return (
            <div className={styles.SelectMenu}>
                <select onChange={this.props.handleInput} name="releaseType">
                    {this.props.choices.map((choice, index) => {
                        return (
                            <option value={choice} key={index}>
                                {choice}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}
