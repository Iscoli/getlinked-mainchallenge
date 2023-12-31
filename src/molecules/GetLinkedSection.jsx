import React from "react";
import { useState, useEffect } from "react";
import styles from "./GetLinked.module.scss";
import purple from "../assets/purple-flare.png";
import star1  from '../assets/star1.png';
import star2  from '../assets/star.png'
import VectorLogo from "../assets/Vector.svg";
import chain from "../assets/chain.png";
import cracker from "../assets/cracker.png";
import water from "../assets/water.png";
import man from "../assets/man.png";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

function GetLinkedSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the time state with the current time
      setTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Format the time to display hours, minutes, and seconds
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const scrollRef = useRef(null);

  return (
    <div
    style={{marginTop:'80px',
     }}
    className={styles.majorContainer}>
     <span
      
     className={styles.Line1}></span>
      <p
        className={styles.igniting}
        style={{ textAlign: "right", paddingRight: "28px",
         marginTop:'20px' }}
        ref={scrollRef}
      >
        Igniting a Revolution in HR Innovation
      </p>

      <div className={styles.vector}>
        <img src={VectorLogo} />
      </div>

      <section className={styles.getLinkSection}>
        <div style={{ position: "relative" }} className={styles.getLink}>
          <img src={purple} className={styles.purple} />
          
          <img 
        src={star1} 
        className={`${styles.star1} ${styles.blink}`} />

         <img 
        src={star2} 
        className={`${styles.star2} ${styles.blink2}`} />

        <img 
        src={star1} 
        className={`${styles.star3} ${styles.blink3}`} />
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{
              x: 0,
            }}
            transition={{
              type: "spring",
              delay: 1,
              mass: 0.4,
              damping: 8,
              duration: 9,
              bounce: 0.3,
            }}
          >
            <p className={styles.getTech}>getlinked Tech</p>

            <p className={styles.Hackathon}>
              <span className={styles.getTech}>Hackathon</span>
              <span>1.0</span>
              <span>
                <img style={{ width: "37px" }} src={chain} />
              </span>
              <span>
                <img style={{ width: "37px" }} src={cracker} />
              </span>
            </p>

            <p className={styles.participate}>
              Participate in getlinked tech Hackathon 2023 <br></br> stand a
              chance to win a Big prize
            </p>

            <Link
           style={{ textDecoration: "none", color: "#fff" }}
           to='/register'
           >
            <button>Register</button>
          </Link>

            <p className={styles.time}>
              {hours}
              <span>H</span>&nbsp;&nbsp;
              {minutes}
              <span>M</span>&nbsp;&nbsp;
              {seconds}
              <span>S</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: "100vw" }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            delay: 1,
            mass: 0.4,
            damping: 8,
            duration: 9,
            bounce: 0.3,
          }}
          className={styles.ManSection}
        >
          <div
           style={{position:"relative"}}
          className={styles.rotatingImageContainer}>
         
            <img
              className={`${styles.rotatingImage} ${styles.water}`}
              src={water}
              alt="Rotating Image"
            />
          </div>
          <img className={styles.man} src={man} />
        </motion.div>
      </section>
    </div>
  );
}

export default GetLinkedSection;
