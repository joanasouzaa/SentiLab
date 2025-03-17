import styles from '../../styles/form/Input.module.css'

export default function Input({type, name, placeholer, handleOnchange}){
    return(
        <div>
            <input className={styles.input_email_home}
            type={type} 
            name={name}
            id={name}
            placeholder={placeholer}
            onChange={handleOnchange}
            />
        </div>
    )
} 