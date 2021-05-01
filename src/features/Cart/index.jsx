import React from 'react';
import './style.css';
import Layout from "../../components/Layout";
import Header from "./components/Header/index";
import Course from "./components/Course";
import BuyButton from "./components/BuyButton";
import CartBody from "./components/CartBody";
import OtherCourses from "./components/OtherCourses";
import {useSelector} from "react-redux";
import Loading from "react-fullscreen-loading";

function Cart() {

    const cart = useSelector(state => state.cart.courseList);
    const isLoading = useSelector(state => state.cart.isLoading);

    const renderCart = cart.map(item => {
        return (
            <Course key={item.id} course={item} />
        )
    })

    return (
        <Layout>
            <Loading loading={isLoading} background="#181823" loaderColor="#3498db"/>
            <div className="cover-all">
                {/* Cart header */}
                <Header/>
                {/* End cart header */}


                {/* Cart body */}
                <CartBody/>
                {/* End Cart body */}

                
                {/* Courses */}
                {renderCart}
                {/* End courses */}
                


                {/* Cart buy button */}
                <BuyButton/>
                {/* End Cart buy button */}

                {/* Cart other courses */}
                <OtherCourses/>

                {/* End Cart other courses */}
            </div>
        </Layout>
    )
}

export default Cart;