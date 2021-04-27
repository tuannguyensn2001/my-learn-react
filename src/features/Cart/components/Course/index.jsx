import React from 'react';
import styles from './style.module.css';
import Button from "../Button";
import {useDispatch} from "react-redux";
import {fetchAPIDeleteCourseFromCart} from "../../slice/cartSlice";

const bodyCourseClass = styles.body__course;
const courseWrapClass = styles.course__wrap + ' col-xl-7';
const courseCheckboxClass = styles.course__checkbox;
const coursePictureClass = styles.course__picture;
const coursePriceClass = styles.course__price + ' col-xl-2';
const courseAction = styles.course__action + ' col-xl-2';


function Course({course}) {

    const dispatch = useDispatch();

    const deleteCourse = id => {
        dispatch(fetchAPIDeleteCourseFromCart({
            id
        }))
    }

    return (
        <div className={bodyCourseClass}>
            {/* Select one checkbox */}
            <div className={courseWrapClass}>
                <input type="checkbox" className={courseCheckboxClass} id="checked" value="checked"/>
                <img className={coursePictureClass}
                     src={course.media.source}
                     alt="Course's picture"/>
                {course.name}
            </div>
            {/* End Select one checkbox */}

            <div className="course__spacing col-xl-1"/>
            <div className={coursePriceClass}>{course.price}</div>
            <div className={courseAction}>
                <Button onClick={() => deleteCourse(course.id)} >
                   Xóa
                </Button>
            </div>
        </div>
    )
}

export default Course;