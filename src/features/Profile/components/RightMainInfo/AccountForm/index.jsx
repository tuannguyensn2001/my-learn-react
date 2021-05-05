import React from 'react';
import styles from './style.module.css';
import {Input} from 'antd';
import SubHeading from '../SubHeading';

const coverAllClass = styles['cover-all'];
const formControlClass = styles['form-control'];

function AccountForm ({AccountForm}) {
    return (
        <div className={coverAllClass}>
            <SubHeading>Tên đăng nhập</SubHeading>
            <Input/>
            <SubHeading>Email</SubHeading>
            <input className={formControlClass} type="email"/>
            <SubHeading>Mật khẩu hiện tại</SubHeading>
            <input className={formControlClass} type="password"/>
            <SubHeading>Mật khẩu mới</SubHeading>
            <input className={formControlClass} type="password"/>
            <SubHeading>Xác nhận mật khẩu mới</SubHeading>
            <input className={formControlClass} type="password"/>
        </div>
    )
}

export default AccountForm;