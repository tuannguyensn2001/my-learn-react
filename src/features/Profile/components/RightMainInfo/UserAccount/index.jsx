import React from 'react';
import styles from '../UserProfile/style.module.css';
import TextInsert from '../TextInsert';
import SubHeading from '../SubHeading';
import SaveButton from '../SaveButton';
import AvatarFrame from '../AvatarFrame';
import {Input} from "antd";
import AccountForm from '../AccountForm';
import useLocalization from '../../../../../hooks/useLocalization';

const coverAllClass = styles.cover_all;
const headingClass = styles.heading;
const headingTitleClass = styles.heading__title;
const lineBreakClass = styles['line-break'];
const inputSectionClass = styles.input_section + ' d-flex mt-4';

function UserAccount ({UserAccount}) {

    const {trans} = useLocalization();

    return (
        <div className={coverAllClass}>
            <div className={headingClass}>
                <div className={headingTitleClass}>{trans('userAccount.title')}</div>
                <div className="heading__sub-title">{trans('userAccount.subTitle')}</div>
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