import React from 'react';
import styles from './style.module.css';

const coverClass = styles.cover;
const textInsertClass = styles.text_insert;
const subTextClass = styles.sub_text;

function TextInsert (props) {
    return (
        <div className={coverClass}>
            <input type="text" className={textInsertClass} placeholder={props.children}/>
            {/* Optional */}
            <div className={subTextClass}>alksdjflsakdjf</div>
        </div>
    )
}

export default TextInsert;