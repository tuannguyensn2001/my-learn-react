import React from 'react';
import './style.css';
import Layout from "../../components/Layout";

function Cart()
{
    return(
        <Layout>
            <div className="cover-all">
                {/* Cart header */}
                <div className="header">
                    <div className="row container-fluid">
                        <div className="cart__header container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">Shopping cart</div>
                    </div>
                </div>
                {/* End cart header */}


                {/* Cart body */}
                <div className="row container-fluid">
                    <div className="body container col-xl-10 offset-xl-1 col-lg-10 col-md-10 col-sm-11">
                        <div className="body__interact-box">
                            {/* Select all checkbox */}
                            <div className="interact-box__all col-xl-8">
                                <input type="checkbox" id="check-all" value="check-all"/>
                                <label for="checkbox" className="checkbox-text">Chọn tất cả</label>
                            </div>
                            {/* End Select all checkbox */}

                            <div className="interact-box__price col-xl-2">Đơn giá</div>
                            <div className="interact-box__other col-xl-2">Thao tác</div>
                        </div>

                        {/* Courses */}
                        <div className="body__course">
                            {/* Select one checkbox */}
                            <div className="course__wrap col-xl-7">
                                <input type="checkbox" className="course__checkbox" id="checked" value="checked"/>
                                <img className="course__picture" src="https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png" alt="Course's picture"/>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ducimus tempore vel ullam pariatur possimus, eveniet culpa natus! Minus neque quidem cum natus modi suscipit est corporis blanditiis rerum voluptate similique earum ratione provident illo non nulla sed, necessitatibus et.
                            </div>
                            {/* End Select one checkbox */}

                            <div className="course__spacing col-xl-1"></div>
                            <div className="course__price col-xl-2">320.000$</div>
                            <div className="course__action col-xl-2">
                                <button className="btn--cart">Xóa</button>
                            </div>
                        </div>
                        {/* End courses */}
                    </div>
                </div>
                {/* End Cart body */}


                {/* Cart buy button */}
                <div className="buy-btn">
                    {/* Select all checkbox */}
                    <div className="course__wrap col-xl-1">
                        <input type="checkbox" className="course__checkbox" id="checked" value="checked"/>
                        Chọn tất cả
                    </div>
                    {/* End select all checkbox */}
                    <div className="footer__btn-wrapper col-xl-2">
                        <button className="btn--cart">Xóa</button>
                    </div>
                    <div className="footer__text-cover col-xl-7">
                        Tổng thanh toán (0 sản phẩm): 
                        <span className="total-pay">$999.999</span>
                    </div>
                    <div className="btn-cover col-xl-2">
                        <button className="btn--cart accept-buy-btn">Mua Hàng</button>
                    </div>
                </div>
                {/* End Cart buy button */}

                {/* Cart other courses */}
                <div className="row container-fluid">
                    <div className="other-courses container col-xl-10 offset-xl-1 col-lg-10 col-md-10 col-sm-11">
                        {/* A course */}
                        <div className="o-course col-xl-3">
                            <div className="o-course__cover">
                                <a href="#" className="o-course__pic-cover">
                                    <img className="o-course__pic" src="https://elearningindustry.com/wp-content/uploads/2015/10/6-convincing-reasons-take-elearning-course.jpg" alt="A course"/>
                                </a>
                                <div className="o-course__wrapper">
                                    <a href="#" className="o-course__link">
                                        <div className="o-course__name">Lorem ipsum dolor sit.</div>
                                        <div className="o-course__teacher">Jose Portilla</div>
                                    </a>
                                    <div className="o-course__price">
                                        <button className="btn--cart add-to-cart">Thêm khóa học</button>
                                        $129.99
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                {/* End Cart other courses */}
            </div>
        </Layout>
    )
}

export default Cart;