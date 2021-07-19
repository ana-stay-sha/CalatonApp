import styles from './UserForm.module.css'
import FormBlock from './FormBlock/FormBlock.js';


function UserForm(){
    return(

    <div className="UserForm">
        <section className={styles.wrapper}>
        <h1 className={styles.title}>Contact us</h1>

            <FormBlock />
           
        </section>
     </div>
    )
}

export default UserForm