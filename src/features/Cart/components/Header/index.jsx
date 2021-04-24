import React from 'react';
import styles from './style.module.css'


const cartHeaderClass = styles.cart__header+' col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10';


function Header()
{
    return(
        <div className={styles.header}>
            <div className="row container-fluid">
                <div className={cartHeaderClass}>Shopping cart</div>
            </div>
        </div>
    )
}

export default Header;