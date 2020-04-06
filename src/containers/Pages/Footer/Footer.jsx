import React, { Component } from "react";
import styles from "./Footer.module.scss";

import cv from "../../../static/files/AndyCameronCV.pdf";
import andy from "../../../static/images/andy.jpg";
import linkedin from "../../../static/images/linkedin.svg";
import github from "../../../static/images/github.svg";
import dinosaur from "../../../static/images/dinosaur.svg";
import chest from "../../../static/images/chest.svg";

export default class Footer extends Component {
    render() {
        return (
            <>
                <a name="contact" />
                <section className={styles.Footer}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <img src={andy} alt={"A picture of me!"} />
                            </div>
                            <div className={styles.information}>
                                <h2>Get in touch</h2>
                                <p>
                                    For freelance work, job enquiries or a chat,
                                    please drop me a line at{" "}
                                    <a
                                        href="mailto:afcameron@gmail.com"
                                        target="_blank"
                                    >
                                        afcameron@gmail.com
                                    </a>
                                </p>
                                <br />
                                <p>
                                    You can download my CV{" "}
                                    <a href={cv} target="_blank">
                                        here
                                    </a>
                                    , or follow me on
                                </p>
                                <hr />
                                <div className={styles.social}>
                                    <div>
                                        <a
                                            href="https://github.com/andfcam"
                                            target="_blank"
                                        >
                                            <img
                                                src={github}
                                                alt="Link to GitHub"
                                            />
                                            <p>GitHub</p>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.linkedin.com/in/a67/"
                                            target="_blank"
                                        >
                                            <img
                                                src={linkedin}
                                                alt="Link to LinkedIn"
                                            />
                                            <p>LinkedIn</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className={styles.dinosaur}
                        src={dinosaur}
                        alt="A dinosaur fossil"
                    />
                    <img
                        className={styles.chest}
                        src={chest}
                        alt="Buried treasure!"
                    />
                    {/* Entypo pictograms by Daniel Bruce — www.entypo.com */}
                </section>
            </>
        );
    }
}
