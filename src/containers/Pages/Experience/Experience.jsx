import React, { Component } from "react";
import styles from "./Experience.module.scss";

import theodolite from "../../../static/images/theodolite.svg";
import worm from "../../../static/images/worm.svg";

export default class Experience extends Component {
    render() {
        return (
            <>
                <a name="experience" />
                <section className={styles.Experience}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h2>Background</h2>
                            <h3>Lead Land and Utility Surveyor</h3>
                            <p>
                                Planned and managed land, building and utility
                                surveys across the UK to PAS-128 standards. Trained
                                in high-risk working environments. Experience
                                working with 3D Point Clouds, Electromagnetics, GPR
                                and Topographical Equipment. Automated AutoCAD
                                processes with LISP routines.
                            </p>
                        </div>
                    </div>
                    <img
                        className={styles.theodolite}
                        src={theodolite}
                        alt="A theodolite"
                    />
                    <img className={styles.worm} src={worm} alt="A worm" />
                </section>
            </>
        );
    }
}
