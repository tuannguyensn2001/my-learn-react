import React from 'react';
import styles from './style.module.css';
import {Button, Modal, notification} from "antd";
import {buyCourse} from '../../services/index';
import {useDispatch} from "react-redux";
import {updateCourse} from "../../../../slice/authSlice";
import useLocalization from '../../../../hooks/useLocalization';


const buyBtnClass = styles['buy-btn'];
const courseWrapClass = styles?.courseWrap + ' col-xl-1';
const footerTextCoverClass = styles.footer__text_cover + ' col-xl-3 col-lg-4 col-sm-4';
const totalPayClass = styles['total-pay'];

const {confirm} = Modal;

function BuyButton({BuyButton, total, buyCourse: actionBuyCourse}) {

    const {trans} = useLocalization();

    const dispatch = useDispatch();

    const onClickAccept = () => {
        confirm({

            content: <div>
                <p>{trans('cartBuyButton.confirmBuy')}</p>
                <ul>
                    {total.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
                <p>{trans('cartBuyButton.totalPayment')} {total.reduce((total, item) => total + item.price, 0)}</p>
            </div>,
            okText: trans('cartBuyButton.okText'),
            cancelText: trans('cartBuyButton.cancelText'),
            onOk() {
                buyCourse({
                    course: total.map(item => item.id)
                })
                    .then(response => {
                        actionBuyCourse(() => {
                            return {
                                status: 'success',
                                message: trans('cartBuyButton.message'),
                                description: trans('cartBuyButton.description')
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
            <div className={footerTextCoverClass}>
                {trans('cartBuyButton.totalMoney')} ({total.length} {trans('cartBuyButton.product')}):
                <span className={totalPayClass}>{total.reduce((total, item) => {
                    return total + item.price;
                }, 0)}</span>
            </div>
            <div className="btn-cover col-xl-2 col-lg-2 col-sm-2">
                <Button onClick={onClickAccept} disabled={total.length === 0}>{trans('cartBuyButton.button')}</Button>
            </div>
        </div>
    )
}

export default BuyButton;