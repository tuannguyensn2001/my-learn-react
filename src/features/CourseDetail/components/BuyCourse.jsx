import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAPIAddToCart} from "../../Cart/slice/cartSlice";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import styles from './style.module.css';

const BuyCourseClass = styles.buy_course + ' container col-xl-3 offset-xl-8';

const BuyCourse = styled.div`
    position: fixed;
    /* display: none; */
    top: 96px;
    z-index: 1;
    border-bottom: 1px solid #d1d7dc;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
    border-radius: 4px;
    background-color: #fff;
`


export default ({course}) => {

    const [courseBought, setCourseBought] = useState(null);
    const user = useSelector(state => state.auth.user);
    const cart = useSelector(state => state.cart.courseList);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!user?.courses) return;
        setCourseBought(() => {
            return user.courses.find(item => item.slug === course.slug);
        })
    }, [course, user])

    const handleClickAddToCart = () => {
        dispatch(fetchAPIAddToCart({
            userId: user.id,
            courseId: course.id,
        }))
    }

    const renderButton = () => {
        if (!courseBought) {
            return (
                <div>
                    {/*<button onClick={handleClickAddToCart} className="bc-btn__add bc-btn"></button>*/}
                    {cart.find(item => item.id === course.id)
                        ? <Link className={''} to={'/cart'}>Đi tới giỏ hàng</Link>
                        : <button onClick={handleClickAddToCart} className="bc-btn__add bc-btn">Thêm vào giỏ hàng</button>
                    }
                    <button className="bc-btn__buy bc-btn">Buy now</button>
                </div>
            )
        }

    return(
        <div>
            Đã mua vào lúc {new Date(courseBought.pivot.created_at).toLocaleDateString()}
        </div>
    )
    }


    return(
        <BuyCourse className={BuyCourseClass}>
            <div className="buy-course__video">
                {/* Put the video here */}
                <iframe className="course-video" src="https://www.youtube.com/embed/b7ffmtnuSGM"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className="buy-course__cover">
                <div className="bc-cover__price">
                    <div className="price__current">$11.99</div>
                    <div className="price__default">$129.99</div>
                    <div className="price__sale">91% off</div>
                </div>
                <div className="bc-cover__sale-time">
                    <i className="clock-icon fal fa-alarm-clock"></i>
                    1 day left at this price!
                </div>

                {renderButton()}
            </div>
        </BuyCourse>
    )
    }