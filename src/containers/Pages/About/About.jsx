import React, { Component } from "react";
import styles from "./About.module.scss";

export default class About extends Component {
    render() {
        return (
            <>
                <a name="about" />
                <section className={styles.About}>
                    <div className={styles.container}>
                        <div className={styles.skills}>
                            <div>
                                <p className={styles.JavaScript}>JavaScript</p>
                                <p className={styles.React}>React</p>
                                <p className={styles.Firebase}>Firebase</p>
                                <p className={styles.HTML}>HTML</p>
                                <p className={styles.Sass}>Sass</p>
                                <p className={styles.Node}>Node</p>
                                <p className={styles.MongoDB}>MongoDB</p>
                                <p className={styles.CSS}>CSS</p>
                            </div>
                            <div className={styles.bars}>
                                <div>
                                    <span style={{ width: "70%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "50%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "40%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "80%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "70%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "20%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "20%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "80%" }}></span>
                                </div>
                            </div>
                            <div>
                                <p className={styles.AutoCAD}>AutoCAD</p>
                                <p className={styles.Agile}>Agile</p>
                                <p className={styles.Testing}>Testing</p>
                                <p className={styles.Git}>Git</p>
                                <p className={styles.Bash}>Bash</p>
                                <p className={styles.OOP}>OOP</p>
                                <p className={styles.APIs}>APIs</p>
                                <p className={styles.VSCode}>VS Code</p>
                            </div>
                            <div className={styles.bars}>
                                <div>
                                    <span style={{ width: "85%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "60%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "30%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "80%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "60%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "80%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "50%" }}></span>
                                </div>
                                <div>
                                    <span style={{ width: "80%" }}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.information}>
                            <h2>What can I do?</h2>
                            <p>
                                I am currently part of a full-time, 12-week Software
                                Development program at{" "}
                                <a
                                    href="https://nology.io/12-week-software-developer-course/"
                                    target="_blank"
                                >
                                    _nology
                                </a>
                                , gaining hands-on experience in: JavaScript (ES6),
                                React, Firebase, SCSS, HTML, APIs and more.
                            </p>
                            <br />
                            <p>
                                Over four weeks, I have led and delivered a client
                                project for{" "}
                                <a
                                    href="https://www.getthedrop.co.uk/"
                                    target="_blank"
                                >
                                    The Drop
                                </a>{" "}
                                where I continue to work as a freelance developer.
                            </p>
                            <br />
                            <p>
                                Want to see some examples?{" "}
                                <a href="#portfolio">Scroll down.</a>
                            </p>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
