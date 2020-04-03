import React, { Component } from "react";
import styles from "./Projects.module.scss";

import Project from "./Project";

export default class Projects extends Component {
    render() {
        return (
            <div className={styles.Projects}>
                {this.props.projects.map((project, index) => (
                    <Project
                        project={project}
                        onHover={this.props.onHover}
                        key={index}
                    />
                ))}
            </div>
        );
    }
}
