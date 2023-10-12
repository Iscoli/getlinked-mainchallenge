import React from "react";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import MySVGIcon from "../assets/hambuger.svg";
import closeIcon from "../assets/Close.svg";

function NavBar() {
  const [modal, setModal] = useState(false);
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

  const Modal = () => {
    console.log("hello world");
    setModal(!modal);
  };
  console.log(modal);
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
          <p>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#timeline"
            >
              TimeLine{" "}
            </a>
          </p>
          <p>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#overview"
            >
              Overveiw{" "}
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none", color: "#fff" }} href="#faqs">
              FAQs{" "}
            </a>
          </p>
          <p>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#contact"
            >
              Contact{" "}
            </a>
          </p>
        </div>
        <div>
          {isLargeScreen ? (
            <button>Register</button>
          ) : (
            <div onClick={Modal}>
              <img style={{ cursor: "pionter" }} src={MySVGIcon} />
            </div>
          )}
        </div>
      </nav>

      <div styles={{ position: "relative" }}>
        {modal && (
          <div className={styles.modal}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <p>
                get
                <span>Linked</span>
              </p>
              <img onClick={Modal} src={closeIcon} />
            </div>
            <p>
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="#timeline"
              >
                Timeline
              </a>
            </p>
            <p>
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="#overview"
              >
                Overview
              </a>
            </p>
            <p>
              <a style={{ textDecoration: "none", color: "#fff" }} href="#faqs">
                FAQs
              </a>
            </p>
            <p>
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="#contact"
              >
                Contact
              </a>
            </p>
            <button className={styles.btn}>Register</button>
          </div>
        )}
      </div>
      <div className={styles.Line1}></div>
    </>
  );
}

export default NavBar;
