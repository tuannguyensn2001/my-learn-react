import React from 'react';
import styles from './style.module.css';
import TextInsert from '../TextInsert';
import SubHeading from '../SubHeading';
import SaveButton from '../SaveButton';
import {Input} from "antd";

const coverAllClass = styles.cover_all;
const headingClass = styles.heading;
const headingTitleClass = styles.heading__title;
const lineBreakClass = styles['line-break'];
const inputSectionClass = styles.input_section + ' d-flex mt-4';

function UserProfile ({UserProfile}) {
    return (
        <div className={coverAllClass}>
            <div className={headingClass}>
                <div className={headingTitleClass}>Hồ sơ</div>
                <div className="heading__sub-title">Chỉnh sửa thông tin của bạn</div>
            </div>
            <div className={lineBreakClass}></div>
            <div className={inputSectionClass}>
                {/*<SubHeading>Thong tin ca nhan</SubHeading>*/}
                {/*<TextInsert>Nam dep trai</TextInsert>*/}
                {/*<TextInsert>Vai lon</TextInsert>*/}
                {/*<TextInsert></TextInsert>*/}
                {/*<TextInsert></TextInsert>*/}
                {/*<TextInsert></TextInsert>*/}
                {/*<SaveButton></SaveButton>*/}

                <Input/>

            </div>
        </div>
    )
}

export default UserProfile;