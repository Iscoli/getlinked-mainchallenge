import React from "react";
import styles from './SectionOne.module.scss'
import NavBar from "../../molecules/NavBar";
import GetLinked from "../../molecules/GetLinked";

function SectionOne() {  
  return (
    <div className={styles.Sec1Container}>
      <NavBar />
      <GetLinked />
    </div>
  );
}

export default SectionOne;
