import React from 'react';
import styles from './style.module.css'

function Button(props)
{
    return(
        <button className={styles['btn--cart']}>{props.children}</button>
    )
}

export default Button;