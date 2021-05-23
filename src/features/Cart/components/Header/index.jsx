import React from 'react';
import styles from './style.module.css';
import useLocalization from '../../../../hooks/useLocalization';


const cartHeaderClass = styles.cart__header+' col-xl-6 offset-xl-1 col-lg-7 offset-lg-1 col-md-9 offset-md-1';


function Header()
{
    const {trans} = useLocalization();

    return (
        <div className={styles.header}>
            <div className="row container-fluid">
                <div className={cartHeaderClass}>{trans('cartHeader.title')}</div>
            </div>
        </div>
    )
}

export default Header;