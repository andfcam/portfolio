import React, { Component } from "react";
import styles from "./Project.module.scss";

export default class Project extends Component {
    // display small colour lines/blobs/circles to show technologies used

    render() {
        return (
            <article
                className={styles.Project}
                onMouseOver={this.props.onHover}
                id={this.props.project.id}
            >
                <h4>{this.props.project.title}</h4>
                <p>Week {this.props.project.weeks}</p>
            </article>
        );
    }
}
