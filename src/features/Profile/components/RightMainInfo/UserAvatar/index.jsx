import React from 'react';
import styles from '../UserProfile/style.module.css';
import TextInsert from '../TextInsert';
import SubHeading from '../SubHeading';
import SaveButton from '../SaveButton';
import AvatarFrame from '../AvatarFrame';
import {Input} from "antd";

const coverAllClass = styles.cover_all;
const headingClass = styles.heading;
const headingTitleClass = styles.heading__title;
const lineBreakClass = styles['line-break'];
const inputSectionClass = styles.input_section + ' d-flex mt-4';

function UserAvatar ({UserAvatar}) {
    return (
        <div className={coverAllClass}>
            <div className={headingClass}>
                <div className={headingTitleClass}>Ảnh đại diện</div>
                <div className="heading__sub-title">Chỉnh sửa ảnh hồ sơ của bạn</div>
            </div>
            <div className={lineBreakClass}></div>
            <div className={inputSectionClass}>
                <AvatarFrame></AvatarFrame>
                <SaveButton></SaveButton>
            </div>
        </div>
    )
}

export default UserAvatar;