
import styles from './input.module.css'

export default function Input(props){


    return(
        <div className={styles.inputWrapper}>
                    <label>{props.label}</label>
                    <input name={props.name}  onChange={props.change} type={props.type} />
                </div>
    )
}