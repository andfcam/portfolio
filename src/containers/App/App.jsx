import React from "react";
import styles from "./App.module.scss";
import Navbar from "../../components/Navbar";
import Splash from "../Pages/Splash";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Experience from "../Pages/Experience";
import Footer from "../Pages/Footer";

// Me in a boat with red sail saying Hi on blue of waves in Splash, with whale in blue on right. Or surfing on top.
// Small hiker on green of hill in About section. Could have small cloud above in white.
// Green drips down from Projects goop, to give layer of green over brown hills as grass.
// Objects in brown of ground in Experience section
//      Explosive, skeleton, rubber duck, underground line or sewer.
// People in underground train, or rat in sewer, say 'Hire him!' in speech bubbles.

// Links https://codepen.io/mprquinn/pen/OmOMrR

// Possible to add game again (redone) with topo kit on top of ground (no conversation or duck, just destroy words)

// Want to add Mars Weather API as example. Red blob (blobmaker) on black background

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Splash />
            <About />
            <Portfolio />
            <Experience />
            <Footer />
        </div>
    );
}

export default App;
