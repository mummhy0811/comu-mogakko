import { useState } from 'react';
import styles from './day4.module.css';


function Day4(){
    const [number, setNumber]=useState(0);

    function plus_btn(){
        setNumber(number+1);
    }
    function minus_btn(){
        setNumber(number-1);
    }
    function reset_btn(){
        setNumber(0);
    }
    return (
        <div className={styles.body}>        
            <div className={styles.text}>
                값: {number}
            </div>
            <div>
                <button className={styles.button} onClick={plus_btn}>+1</button>
                <button className={styles.button} onClick={minus_btn}>-1</button>
                <button className={styles.button} onClick={reset_btn}>reset</button>
            </div>
        </div>
    );

}
export default Day4;