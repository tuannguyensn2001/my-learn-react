import React from 'react';
import styles from './style.module.css';

const coverAllClass = styles['cover-all'];
const coverClass = styles.cover;
const avatarClass = styles.avatar;
const roundBorderClass = styles['round-border'];
const changeAvatarBtnClass = styles['change-avatar-btn'];

function AvatarFrame ({AvatarFrame}) {
    return (
        <div className={coverAllClass}>
            <div className={coverClass}>
                <div className={roundBorderClass}>
                    <img className={avatarClass} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Avatar"/>
                </div>
                <button className={changeAvatarBtnClass}>Chọn ảnh</button>
            </div>

        </div>
    )
}

export default AvatarFrame;