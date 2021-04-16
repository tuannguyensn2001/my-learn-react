import React from "react";
import {useDispatch} from "react-redux";
import {addCourse} from "../../Cart/slice/cartSlice";

export default () => {

    const dispatch = useDispatch();



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
                <button onClick={() => dispatch(addCourse({
                    course: {
                        name: 'khoa hoc moi'
                    }
                }))} className="bc-btn__add bc-btn">Add to cart</button>
                <button className="bc-btn__buy bc-btn">Buy now</button>
            </div>
        </div>
    )
}