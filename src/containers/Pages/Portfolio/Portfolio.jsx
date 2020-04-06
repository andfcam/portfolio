import React, { Component } from "react";
import styles from "./Portfolio.module.scss";
import { firestore } from "../../../firebase";

import SearchBar from "../../../components/Utility/SearchBar";
import Projects from "../../../components/Projects";
import browser from "../../../static/images/browser.png";
import browsertop from "../../../static/images/browsertop.png";
import code from "../../../static/images/code.svg";
import live from "../../../static/images/mouse-pointer.svg";
import left from "../../../static/images/chevron-left.svg";
import right from "../../../static/images/chevron-right.svg";

export default class Portfolio extends Component {
    state = {
        searchText: "",
        projects: [],
        filteredProjects: [],
        previewProject: null
    };

    componentDidMount() {
        this.getAllProjects();
    }

    setSearchText = event => {
        const searchText = event.target.value;
        this.setState({ searchText }, this.filterProjects);
    };

    getAllProjects = () => {
        firestore
            .collection("Projects")
            .get()
            .then(query => {
                const projects = query.docs.map(doc => {
                    return Object.assign(doc.data(), { id: doc.id });
                });
                if (projects.length < 1) return;
                this.setState({
                    projects,
                    filteredProjects: projects,
                    previewProject: projects[0]
                });
            });
    };

    filterProjects = () => {
        if (this.state.searchText.length === 0) {
            this.getAllProjects();
        } else {
            const filteredProjects = this.state.projects.filter(project => {
                return project.title
                    .toLowerCase()
                    .includes(this.state.searchText.toLowerCase());
            });
            this.setState({ filteredProjects });
        }
    };

    handleHover = event => {
        if (event.target.nodeName === "ARTICLE") {
            const previewProject = this.state.projects.find(
                project => project.id === event.target.id
            );
            this.setState({ previewProject });
        }
    };

    changePreview = event => {
        let index = this.state.projects.indexOf(this.state.previewProject);
        let nextIndex;
        if (event.target.id === "left") {
            if (index === 0) index = this.state.projects.length;
            nextIndex = (index - 1) % this.state.projects.length;
        } else if (event.target.id === "right") {
            nextIndex = (index + 1) % this.state.projects.length;
        }
        this.setState({ previewProject: this.state.projects[nextIndex] });
    };

    get preview() {
        if (this.state.previewProject === null) {
            return (
                <>
                    <img
                        className={styles.top}
                        src={browser}
                        alt="A browser to preview projects"
                    />
                    <p>Hover over a project on the right to preview it.</p>
                </>
            );
        } else {
            const project = this.state.previewProject;
            return (
                <>
                    <div className={styles.images}>
                        <img
                            className={styles.top}
                            src={browsertop}
                            alt="Preview of the project in-browser"
                        />
                        <img
                            className={styles.bottom}
                            src={project.images.large}
                            alt="Preview of the project in-browser"
                        />
                        <div className={styles.chevrons}>
                            <img
                                onClick={this.changePreview}
                                className={styles.left}
                                id="left"
                                src={left}
                                alt="Link to previous project"
                            />
                            <img
                                onClick={this.changePreview}
                                className={styles.right}
                                id="right"
                                src={right}
                                alt="Link to next project"
                            />
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.title}>
                            <h3>{project.title}</h3>
                            <a href={project.links.github} target="_blank">
                                <img src={code} alt="Link to code on GitHub" />
                            </a>
                            <a href={project.links.hosted} target="_blank">
                                <img src={live} alt="Link to live demo" />
                            </a>
                        </div>
                        <ul>
                            {Object.entries(project.tags).map((tag, index) => (
                                <li className={styles[tag[0]]} key={index}>
                                    {tag[0]}
                                </li>
                            ))}
                        </ul>
                        <p>{project.description}</p>
                    </div>
                </>
            );
        }
    }

    render() {
        return (
            <>
                <a name="portfolio" />
                <section className={styles.Portfolio}>
                    <div className={styles.container}>
                        <div className={styles.preview}>{this.preview}</div>
                        <div className={styles.list}>
                            <h2>Projects</h2>
                            <SearchBar
                                searchText={this.state.searchText}
                                onChange={this.setSearchText}
                                placeHolder={"Search by name..."}
                            />
                            <Projects
                                projects={this.state.filteredProjects}
                                onHover={this.handleHover}
                            />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
