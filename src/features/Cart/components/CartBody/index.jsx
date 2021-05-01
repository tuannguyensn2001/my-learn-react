import React from 'react';
import styles from './style.module.css';

const bodyInteractBoxClass = styles['body__interact-box'];
const checkboxTextClass = styles['checkbox-text'];

function CartBody ({CartBody}) {
    return (
        <div className="row container-fluid">
            <div className="body container col-xl-10 offset-xl-1 col-lg-10 col-md-10 col-sm-11">
                <div className={bodyInteractBoxClass}>
                    {/* Select all checkbox */}
                    <div className="interact-box__all col-xl-8">
                        <input type="checkbox" id="check-all" value="check-all"/>
                        <label for="checkbox" className={checkboxTextClass}>Chọn tất cả</label>
                    </div>
                    {/* End Select all checkbox */}
                    <div className="interact-box__price col-xl-2">Đơn giá</div>
                    <div className="interact-box__other col-xl-2">Thao tác</div>
                </div>
            </div>
        </div>
    )
}

export default CartBody;