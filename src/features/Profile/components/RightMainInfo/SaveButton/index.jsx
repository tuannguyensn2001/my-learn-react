import React from 'react';
import styles from './style.module.css';

const coverClass = styles.cover;
const saveButtonClass = styles['save-btn'];

function SaveButton ({SaveButton}) {
    return (
        <div className={coverClass}>
            <button className={saveButtonClass}>Lưu</button>
        </div>
    )
}

export default SaveButton;