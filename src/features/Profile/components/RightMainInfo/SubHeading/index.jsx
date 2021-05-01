import React from 'react';
import styles from './style.module.css';

const basicInformationClass = styles.basic_info;

function SubHeading (props) {
    return (
        <div className={basicInformationClass}>{props.children}</div>
    )
}

export default SubHeading;