import React, { Component } from "react";
import styles from "./Navbar.module.scss";

class Navbar extends Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY >= 20) {
            document.querySelector("nav").classList.add(styles.floating);
        } else {
            document.querySelector("nav").classList.remove(styles.floating);
        }
    }

    render() {
        return (
            <div>
                <nav className={styles.Nav}>
                    <div className={styles.container}>
                        <a href="#top" className={styles.brand}>
                            Andy Cameron
                        </a>
                        <ul className={styles.links}>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#experience">Experience</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={styles.overlay} />
            </div>
        );
    }
}

export default Navbar;
