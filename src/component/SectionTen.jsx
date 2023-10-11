import styles from "./SectionTen.module.scss";
import virus from "../assets/virus.svg";
import kwado from "../assets/kwado.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SectionTen() {
  const { ref: arrowRef, inView: arrowInView } = useInView({
    threshold: 0.5, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const { ref: introductionRef, inView: introductionInView } = useInView({
    threshold: 0.5, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });

  const boxVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 9,
        delay: 0.5,
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const arrowVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 9,
        delay: 0.5,
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <>
      <div className={styles.line}></div>
      <section ref={arrowRef} className={styles.container}>
        <motion.div
          variants={arrowVariant}
          animate={arrowInView ? "visible" : "hidden"}
          initial="hidden"
          className={styles.sec1}
        >
          <div className={styles.title}>
            <p>Privacy Policy</p>
            <p> and Terms</p>
            <p>Last updated on September 12, 2023</p>
            <p>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className={styles.box}>
            <p>
              {" "}
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <p>Licensing Policy</p>
            <p>Here are terms of our Standard License:</p>

            <p>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
            <p>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>

            <p>Read More</p>
          </div>
        </motion.div>

        <div ref={introductionRef}>
          <motion.div
            variants={boxVariant}
            animate={arrowInView ? "visible" : "hidden"}
            initial="hidden"
            className={styles.foto}
          >
            <img className={styles.virus} src={virus} />
            <img className={styles.kwado} src={kwado} />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionTen;
