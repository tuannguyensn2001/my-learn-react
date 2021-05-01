import React from 'react';
import styles from './style.module.css';

const coverAllClass = styles.cover_all;
const coverClass = styles.cover;
const circleFrameClass = styles['circle-frame'];
const avatarClass = styles.avatar;
const nameClass = styles.name;
const navListClass = styles.nav__list;
const navItemClass = styles.nav__item;

function LeftNavBar ({LeftNavBar}) {
    return (
        <div className={coverAllClass}>
            <div className={coverClass}>
                <div className={circleFrameClass}>
                    <img className={avatarClass} src="data:image/jpeg;base64,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" alt="Avatar"/>
                </div>
                <div className={nameClass}>Nguyễn Văn Nam</div>
            </div>

            <ul className={navListClass}>
                <li className={navItemClass}>Hồ sơ</li>
                <li className={navItemClass}>Ảnh đại diện</li>
                <li className={navItemClass}>Tài khoản</li>
            </ul>
        </div>
    )
}

export default LeftNavBar;