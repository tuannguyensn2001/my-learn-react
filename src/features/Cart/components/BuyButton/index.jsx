import React from 'react';
import styles from './style.module.css';
import Button from "../Button";

const buyBtnClass = styles['buy-btn'];
const courseWrapClass = styles.courseWrap + ' col-xl-1';
const footerTextCoverClass = styles.footer__text_cover + ' col-xl-7';
const totalPayClass = styles['total-pay'];
const acceptBuyBtnClass = styles.accept_buy_btn;

function BuyButton ({BuyButton}) {
    return (
        <div className={buyBtnClass}>
            {/* Select all checkbox */}
            <div className={courseWrapClass}>
                <input type="checkbox" className="course__checkbox" id="checked" value="checked"/>
                Chọn tất cả
            </div>
            {/* End select all checkbox */}
            <div className="footer__btn-wrapper col-xl-2">
                <Button>Xóa</Button>
                {/* <button className="btn--cart">Xóa</button> */}
            </div>
            <div className={footerTextCoverClass}>
                Tổng thanh toán (0 sản phẩm):
                <span className={totalPayClass}>$999.999</span>
            </div>
            <div className="btn-cover col-xl-2">
                <Button className={acceptBuyBtnClass}>Mua hàng</Button>
                {/* <button className="btn--cart accept-buy-btn">Mua Hàng</button> */}
            </div>
        </div>
    )
}

export default BuyButton;