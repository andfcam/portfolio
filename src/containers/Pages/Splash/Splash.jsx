import React, { Component } from "react";
import styles from "./Splash.module.scss";

import fish from "../../../static/images/fish.svg";
import submarine from "../../../static/images/submarine.svg";

export default class Splash extends Component {
    render() {
        return (
            <section className={styles.Splash}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2>Web Developer</h2>
                        <h3>from Guildford, UK</h3>
                        <p>
                            Hi, I'm Andy. I will shortly be finishing a 12-week
                            Software Development Bootcamp based in Moorgate, London.
                            I'm open to relocating and looking to pursue a
                            challenging tech role with career opportunities.
                        </p>
                        <br />
                        <p>
                            Think I could help you?{" "}
                            <a href="#contact">Let's work together.</a>
                        </p>
                    </div>
                    <img className={styles.fish} src={fish} alt="Some fish" />
                    <img
                        className={styles.submarine}
                        src={submarine}
                        alt="A submarine"
                    />
                </div>
            </section>
        );
    }
}
