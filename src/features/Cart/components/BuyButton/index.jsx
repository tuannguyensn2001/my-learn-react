import React from 'react';
import styles from './style.module.css';
import {Button, Modal, notification} from "antd";
import {buyCourse} from '../../services/index';
import {useDispatch} from "react-redux";
import {updateCourse} from "../../../../slice/authSlice";


const buyBtnClass = styles['buy-btn'];
const courseWrapClass = styles?.courseWrap + ' col-xl-1';
const footerTextCoverClass = styles.footer__text_cover + ' col-xl-7';
const totalPayClass = styles['total-pay'];

const {confirm} = Modal;

function BuyButton({BuyButton, total, buyCourse: actionBuyCourse}) {

    const dispatch = useDispatch();

    const onClickAccept = () => {
        confirm({

            content: <div>
                <p>Xác nhận mua khóa học</p>
                <ul>
                    {total.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
                <p>Tổng tiền: {total.reduce((total, item) => total + item.price, 0)}</p>
            </div>,
            okText: 'Xác nhận',
            cancelText: 'Hủy',
            onOk() {
                buyCourse({
                    course: total.map(item => item.id)
                })
                    .then(response => {
                        actionBuyCourse(() => {
                            return {
                                status: 'success',
                                message: 'Thành công',
                                description: 'Bạn đã mua khóa học thành công'
                            }
                        })
                        dispatch(updateCourse({
                            course: response.data.courses
                        }))
                    })
                    .catch(err => notification['error']({
                        message: err.response.data.message
                    }));
            }
        })
    }

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
                Tổng thanh toán ({total.length} sản phẩm):
                <span className={totalPayClass}>{total.reduce((total, item) => {
                    return total + item.price;
                }, 0)}</span>
            </div>
            <div className="btn-cover col-xl-2">
                <Button onClick={onClickAccept} disabled={total.length === 0}>Mua hàng</Button>
                {/* <button className="btn--cart accept-buy-btn">Mua Hàng</button> */}
            </div>
        </div>
    )
}

export default BuyButton;