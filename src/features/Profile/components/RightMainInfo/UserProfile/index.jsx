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
                <SubHeading>Họ</SubHeading>
                <Input/>
                <SubHeading>Tên</SubHeading>
                <Input/>
                {/* <SubHeading>Chức danh</SubHeading>
                <Input/> */}
                <SubHeading>Vai trò</SubHeading>
                <select name="role" id="role">
                    <option value="teacher">Giáo viên</option>
                    <option value="student">Học viên</option>
                    <option value="other">Khác</option>
                </select>
                <SubHeading>Mô tả về bản thân</SubHeading>
                <Input/>
                <SaveButton></SaveButton>
            </div>
        </div>
    )
}

export default UserProfile;