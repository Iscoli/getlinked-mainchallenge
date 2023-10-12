import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedel from "../assets/linkedel.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <section id="contact" className={styles.MainContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.sec1}>
          <p style={{ fontSize: "24px" }}>
            get
            <span style={{ fontSize: "24px" }} className={styles.color}>
              linked
            </span>
          </p>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p>
            Terms of Use
            <span className={styles.line1}></span>
            Privacy Policy
          </p>
        </div>

        <div className={styles.sec2}>
          <p className={styles.color}>useful Links</p>
          <p>overveiw</p>
          <p>TimeLine</p>
          <p>FAQS</p>
          <p>Register</p>
          <p>
            <span className={styles.color}> Follow Us</span>
            <img className={styles.social} src={facebook} />
            <img className={styles.social} src={twitter} />
            <img className={styles.social} src={instagram} />
            <img className={styles.social} src={linkedel} />
          </p>
        </div>

        <div className={styles.sec3}>
          <p className={styles.color}>contact</p>
          <p>
            <img src={phone} />
            +234 6707653444
          </p>
          <p>
            <img src={location} />
            27,Alara Street Yaba 100012 Lagos State
          </p>
        </div>
      </div>

      <footer
        style={{
          padding: "30px",
          textAlign: "center",
        }}
      >
        All rights reserved. © getlinked Ltd.
      </footer>
    </section>
  );
}

export default Footer;
