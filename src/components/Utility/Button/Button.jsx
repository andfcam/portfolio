import React, { Component } from "react";
import styles from "./Button.module.scss";

export default class Button extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                href={this.props.link}
                className={`${styles.Button} ${styles[`${this.props.type}`]}`}
            >
                {this.props.text}
            </button>
        );
    }
}
