import React from "react";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import MySVGIcon from "../assets/hambuger.svg";
function NavBar() {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 700px)").matches
  );

  useEffect(() => {
    // Define a media query
    const mediaQuery = window.matchMedia("(min-width:700px)");

    // Function to update the state based on the media query result
    const handleMediaQueryChange = (event) => {
      setIsLargeScreen(event.matches);
    };

    // Add an event listener to watch for changes in the media query
    mediaQuery.addListener(handleMediaQueryChange);

    // Initial check and cleanup when the component unmounts
    setIsLargeScreen(mediaQuery.matches);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <nav className={styles.navbarContainer}>
        <div className={styles.getLinked}>
          <p>
            get<span className={styles.getLinkedSpan}>Linked</span>
          </p>
        </div>
        <div
          className={styles.navLinks}
          style={{ display: isLargeScreen ? "flex" : "none" }}
        >
          <p>TimeLine</p>
          <p>Overveiw</p>
          <p>FAQs</p>
          <p>Contact</p>
        </div>
        <div>
          {isLargeScreen ? <button>Register</button> : <img src={MySVGIcon} />}
        </div>
      </nav>
      <div className={styles.Line1}></div>
    </>
  );
}

export default NavBar;
