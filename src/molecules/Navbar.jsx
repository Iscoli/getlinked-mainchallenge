import React from "react";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import MySVGIcon from "../assets/hambuger.svg";
import closeIcon from "../assets/Close.svg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <>
      <nav className={styles.navbarContainer}>
        <div className={styles.getLinked}>
         <Link
         style={{ textDecoration: "none", color: "#fff" }}
          to='/'
         > <p>
            get<span className={styles.getLinkedSpan}>Linked</span>
          </p>
          </Link>
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
            <Link 
            style={{ textDecoration: "none", color: "#fff" }}
            to='/contact'>
              Contact{" "}
              </Link>
          </p>
        </div>
        <div>
          {isLargeScreen ? (
           <Link
           style={{ textDecoration: "none", color: "#fff" }}
           to='/register'
           > <button>
              Register
              </button>
              </Link>
          ) : (
            <div onClick={Modal}>
              <img style={{ cursor: "pionter" }} src={MySVGIcon} />
            </div>
          )}
        </div>
      </nav>

      <div styles={{ position: "relative" }}>
     <AnimatePresence>
        {modal && (
          <motion.div 
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.modal}
          style={{transformOrigin:'top'}}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
               <Link
         style={{ textDecoration: "none", color: "#fff" }}
          to='/'
         >
              <p>
                get
                <span>Linked</span>
              </p>
              </Link>

              <img onClick={Modal} src={closeIcon} />
            </div>
            <motion.div
             variants={containerVars}
             initial="initial"
             animate="open"
             exit="initial"
            >
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
            <Link 
            style={{ textDecoration: "none", color: "#fff" }}
            to='/contact'>
              Contact{" "}
              </Link>
            </p>
            <Link
           style={{ textDecoration: "none", color: "#fff" }}
           to='/register'
           > 
           <button className={styles.btn}>Register</button></Link>
           </motion.div>
          </motion.div>
        )}
       </AnimatePresence>
      </div>
      
    </>
  );
}

export default NavBar;
