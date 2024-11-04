
import styles from './textArea.module.css'
export default function TextArea(props){

    return(
        <div className={styles.textareaWrapper}>
            <label>{props.label}</label>
            <textarea onChange={props.change}></textarea>
        </div>
    )
}