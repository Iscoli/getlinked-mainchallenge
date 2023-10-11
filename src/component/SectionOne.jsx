import styles from "../component/SectionOne.module.scss";
import GetLinkedSection from "../molecules/GetLinkedSection";
import Navbar from "../molecules/Navbar";

function YourComponent() {
  return (
    <header
    className={styles.mainHeader}>
      <Navbar />
      <GetLinkedSection/>
    </header>
  );
}

export default YourComponent;
