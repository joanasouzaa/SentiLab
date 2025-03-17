import styles from '../../styles/form/MensageHome.module.css'

export default function MensageHome({name, placeholer, handleOnchange, value}){
    return(
        <div>
            <textarea className={styles.mensagem_home}
            name={name}
            id={name}
            placeholder={placeholer}
            onChange={handleOnchange}
            value={value}
            />
        </div>
    )
} 