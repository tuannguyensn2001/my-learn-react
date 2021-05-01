import React from 'react';
import styles from './style.module.css';
import Button from '../Button';
import styled from 'styled-components';
const otherCoursesClass = styles.other_courses + ' container col-xl-10 offset-xl-1 col-lg-10 col-md-10 col-sm-11';
const oCourseClass = styles.o_course + ' col-xl-3';
const oCourseCoverClass = styles['o-course__cover'];
const oCoursePicCoverClass = styles['o-course__pic-cover'];
const oCoursePicClass = styles['o-course__pic'];
const oCourseWrapperClass = styles['o-course__wrapper'];
const oCourseLinkClass = styles['o-course__link'];
const oCourseNameClass = styles['o-course__name'];
const oCourseTeacherClass = styles['o-course__teacher'];
const oCoursePriceClass = styles['o-course__price'];
const oCoursePopupClass = styles['o-course__popup'];
const popupCoverClass = styles['popup__cover'];
const popupNameClass = styles.popup__name;
const popupDesClass = styles.popup__des;
const popupBottomClass = styles.popup__bottom;
const popupHeartClass = styles.popup__heart + ' fas fa-heart';

const PopUp = styled.div`
  
`


const OtherCourse = styled.div`
  position: relative;
  
  &:hover ${PopUp}{
    display: block;
  }
  
`



function OtherCourses ({OtherCourses}) {
    return (
        <div className="row container-fluid">
            <div className={otherCoursesClass}>
                <OtherCourse className={'col-xl-3'}>
                    <div className={oCourseCoverClass}>
                        <a href="#" className={oCoursePicCoverClass}>
                            <img className={oCoursePicClass}
                                src="https://elearningindustry.com/wp-content/uploads/2015/10/6-convincing-reasons-take-elearning-course.jpg"
                                alt="A course"/>
                        </a>
                        <div className={oCourseWrapperClass}>
                            <a href="#" className={oCourseLinkClass}>
                                <div className={oCourseNameClass}>Lorem ipsum dolor sit.</div>
                                <div className={oCourseTeacherClass}>Jose Portilla</div>
                            </a>
                            <div className={oCoursePriceClass}>$129.99</div>
                        </div>
                    </div>


                    <PopUp className={oCoursePopupClass}>
                        <div className={popupCoverClass}>
                            <div className={popupNameClass}>Lorem ipsum dolor sit.</div>
                            <ul className={popupDesClass}>
                                <li className="des__detail">Lorem ipsum dolor sit.</li>
                                <li className="des__detail">Lorem ipsum dolor sit.</li>
                                <li className="des__detail">Lorem ipsum dolor sit.</li>
                            </ul>
                            <div className={popupBottomClass}>
                                <Button>Thêm khóa học</Button>
                                <i class={popupHeartClass}></i>
                            </div>
                        </div>
                    </PopUp>
                </OtherCourse>

            </div>
        </div>
    )
}

export default OtherCourses;