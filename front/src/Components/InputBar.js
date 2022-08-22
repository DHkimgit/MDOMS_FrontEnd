import React from 'react';
import styles from './InputBar.module.css';

function InputBar(props) {
    return(
        <div className={styles.userinputwrp}>
            <br/>
            <input type={props.inputtype} className={styles.inputText} name={props.name} value={props.value} onChange={props.onChange} required/>
            <span className={styles.floatinglabel}>{props.placeholder}</span>
        </div>
    )
}
export default InputBar;