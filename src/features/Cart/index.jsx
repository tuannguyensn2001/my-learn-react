import React, {useState, Fragment} from 'react';
import './style.css';
import Layout from "../../components/Layout";
import Header from "./components/Header/index";
import Course from "./components/Course";
import BuyButton from "./components/BuyButton";
import OtherCourses from "./components/OtherCourses";
import {useSelector} from "react-redux";
import Loading from "react-fullscreen-loading";
import {columnCart, rowSelectionCart} from "./define/columns";
import {Table, Alert} from "antd";
import {useDispatch} from "react-redux";
import {fetchAPIDeleteCourseFromCart} from "./slice/cartSlice";



function Cart() {

    const cart = useSelector(state => state.cart.courseList);
    const isLoading = useSelector(state => state.cart.isLoading);
    const [total, setTotal] = useState([]);
    const [status, setStatus] = useState(null);
    const dispatch = useDispatch();

    const deleteCourse = id => dispatch(fetchAPIDeleteCourseFromCart({id}));

    return (
        <Layout>
            <Loading loading={isLoading} background="#181823" loaderColor="#3498db"/>

            <div className="cover-all ">

                <Header/>

                {!!status && <div className={'container'}>
                    <Alert
                        message={'Thành công'}
                        description={'Thành công'}
                        type="success"
                        showIcon

                    />
                </div>
                }


                {!status && <Fragment>

                    <div className="container">
                        <Table
                            locale={{
                                emptyText: 'Bạn chưa sản phẩm trong giỏ hàng'
                            }}
                            rowSelection={{
                                type: 'checkbox',
                                ...rowSelectionCart,
                                onChange(selectedRowKeys, selectedRows) {
                                    setTotal(() => {
                                        return selectedRows;
                                    })
                                }
                            }}
                            pagination={false}
                            columns={columnCart({
                                deleteCourse,
                            })} dataSource={cart.map(item => {
                            return {
                                ...item,
                                source: item?.media?.source,
                                key: item.id,
                            }
                        })}/>
                    </div>

                    <BuyButton buyCourse={setStatus} total={total}/>

                    <div className="container">
                        <OtherCourses/>
                    </div>
                </Fragment>}


            </div>
        </Layout>
    )
}

export default Cart;