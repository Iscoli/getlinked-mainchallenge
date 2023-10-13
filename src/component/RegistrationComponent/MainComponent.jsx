import styles from  './MainComponent.module.scss';
import TechGuy from '../../assets/TechGuy.png';

function MainComponent() {
  return (
   <section>
      <div>
         <img
         className={styles.TechGuy}
          src={TechGuy}
         />
      </div>
      <div className={styles.formDiv}>

      </div>
   </section>
  )
}

export default MainComponent
