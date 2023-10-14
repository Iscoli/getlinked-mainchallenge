import styles from  './MainComponent.module.scss';
import TechGuy from '../../assets/TechGuy.png';

function MainComponent() {
  return (
   <section className={styles.MainContainer}>
      <div className={styles.imgDiv}>
         <img
         className={styles.TechGuy}
          src={TechGuy}
         />
      </div>
      <div className={styles.formDiv}>
        <div>
        <h3
        style={{marginLeft:'10%'}}
        >Register</h3>
        <p
        style={{marginLeft:'10%'}}
        >Be part of this movement!</p>

        <h3
        style={{marginLeft:'10%'}}
        >Create Your Account</h3>

        <form>
           <div 
            className={styles.formDivider}
            style={{marginLeft:'10%'}}
           >
             <div className={styles.inputDiv}>
            <label>Team's Name</label><br></br>
           <input
              type="email"
              placeholder="Enter the name of the group"
              name="email" 
            />
            </div>

            <div className={styles.inputDiv}>
           <label>Phone</label><br></br>
           <input
              type="email"
              placeholder="Enter your phone number"
              name="email" 
            />
            </div>

           </div>
           <div 
            className={styles.formDivider}
            style={{marginLeft:'10%'}}
           >
             <div className={styles.inputDiv}>
            <label>Email</label><br></br>
           <input
              type="email"
              placeholder="Enter Your Email"
              name="email" 
            />
            </div>

            <div className={styles.inputDiv}>
           <label>Project Topic</label><br></br>
           <input
              type="text"
              placeholder="Enter your project topic"
              name="email" 
            />
            </div>
           </div>


           <div 
            className={styles.formDivider}
            style={{marginLeft:'10%'}}
           >
             <div className={styles.inputDiv}>
            <label>Category</label><br></br>
            <select id="cars" name="cars">
            <option value="" disabled>Select your category</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
            </div>

            <div className={styles.inputDiv}>
            <label>Group Size</label><br></br>
            <select id="cars" name="cars">
            <option value="" disabled>Select your category</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
            </div>
           </div>

           <p
            style={{marginLeft:'10%'}}
           >Please review your registration details before submitting</p>

           <div
            style={{marginLeft:'10%',
            marginTop:'10px',
            marginBottom:'10px'}}
           >
           <input type="radio" id="green" name="color" value="green"/>
           <label
            style={{marginLeft:'10px'}}
           >I agreed with the event terms and conditions  and privacy policy</label>
           </div>
            
            <div
             style={{
              display:'flex',
              justifyContent:'center'
             }}
            >
              <button
               className={styles.RegisterBtn}
              >Register</button>
            </div>
        </form>
      </div>
      </div>
   </section>
  )
}

export default MainComponent
