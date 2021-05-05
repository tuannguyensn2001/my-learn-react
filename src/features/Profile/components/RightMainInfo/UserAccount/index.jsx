import React from 'react';
import styles from '../UserProfile/style.module.css';
import TextInsert from '../TextInsert';
import SubHeading from '../SubHeading';
import SaveButton from '../SaveButton';
import AvatarFrame from '../AvatarFrame';
import {Input} from "antd";
import AccountForm from '../AccountForm';

const coverAllClass = styles.cover_all;
const headingClass = styles.heading;
const headingTitleClass = styles.heading__title;
const lineBreakClass = styles['line-break'];
const inputSectionClass = styles.input_section + ' d-flex mt-4';

function UserAccount ({UserAccount}) {
    return (
        <div className={coverAllClass}>
            <div className={headingClass}>
                <div className={headingTitleClass}>Tài khoản</div>
                <div className="heading__sub-title">Chỉnh sửa thông tin tài khoản của bạn</div>
            </div>
            <div className={lineBreakClass}></div>
            <div className={inputSectionClass}>
                <AccountForm></AccountForm>
                <SaveButton></SaveButton>
            </div>
        </div>
    )
}

export default UserAccount;