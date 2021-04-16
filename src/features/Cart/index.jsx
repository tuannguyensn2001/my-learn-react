import React from 'react';
import './style.css';
import Layout from "../../components/Layout";
import {useSelector} from "react-redux";

function Cart()
{

    const courseList = useSelector(state => state.cart.courseList);


    const cart = courseList.map(item => {
        return(
            <p key={item.id}>{item.name}</p>
        )
    })

    return(
        <Layout>
            <div>
                {cart}

            </div>
        </Layout>
    )
}

export default Cart;