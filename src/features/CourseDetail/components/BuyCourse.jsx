import React, {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchAPIAddToCart} from "../../Cart/slice/cartSlice";


export default ({course}) => {

    const [courseBought,setCourseBought] = useState(null);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!user?.courses) return;
        setCourseBought(() => {
            return user.courses.find(item => item.slug === course.slug);
        })
    },[course,user])

    const handleClickAddToCart = () => {
        dispatch(fetchAPIAddToCart({
            userId: user.id,
            courseId: course.id,
        }))
    }

    const renderButton = () => {
        if (!courseBought){
            return(
                <div>
                    <button onClick={handleClickAddToCart} className="bc-btn__add bc-btn">Add to cart</button>
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
        <div className="buy-course container col-xl-3 offset-xl-8">
            <div className="buy-course__video">
                {/* Put the video here */}
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/b7ffmtnuSGM"
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
        </div>
    )
}