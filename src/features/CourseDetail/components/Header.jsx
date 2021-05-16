import React from "react";
import styled from 'styled-components';
import styles from './style.module.css';

const videoWrapperClass = styles['videoWrapper'];
const headButtonsClass = styles['head__buttons'];
const buttonsBtnClass = styles['buttons__btn'];
const mobileBtnClass = styles['mobile-btn'];
const headTitleClass = styles['head__title'];
const headDescriptionClass = styles['head__des'];
const headCreatedByClass = styles['head__created-by'];

const HeaderWrapper = styled.div`
  background-color: #1c1d1f;
  padding-top: 32px;
  color: #fff;
`

const HeadLink = styled.div`
  display: flex;
`

const GuideLink = styled.div`
  color: #b7a9e5;
  text-decoration: none;
  font-weight: 700;
`

const ForwardArrow = styled.i`
  padding: 0 8px;
  font-size: 0.6rem;
  margin: auto 0;
`
// Video
const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;
  display: none;
`

const CourseVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
// End video
const HeadTitle = styled.div`
  text-transform: capitalize;
  font-weight: 700;
  margin-top: 8px;
  font-size: 2.3rem;
  line-height: 1.2;
`

const HeadDes = styled.div`
  font-size: 1.4rem;
  line-height: 1.4;
  margin: 8px 0;
  font-weight: 300;
`

const HeadCreatedBy = styled.div`
  font-size: 1rem;
  font-weight: 300;
`

const ProfileLink = styled.div`
  text-decoration: underline;
  color: #b7a9e5;
`

const MobileBuyBtn = styled.div`
  display: none;
  color: #fff;
  padding: 5px 12px;
  border: 1px solid #fff;
  margin-right: 16px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
`

const HeadButton = styled.div`
  display: flex;
  margin-top: 16px;
  padding-bottom: 48px;
`

const Button = styled.div`
  display: block;
  color: #fff;
  padding: 5px 12px;
  border: 1px solid #fff;
  margin-right: 16px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
`

const ButtonIcon = styled.i`
  margin-left: 8px;
`


function Header({course}) {
    return (
        <HeaderWrapper className={"row head"}>
            <div className="container col-xl-6 offset-xl-1 col-lg-9 col-md-10 col-sm-10">
                <HeadLink className="head__link">
                    <GuideLink href="#" className="guide-link">Lorem, ipsum dolor.</GuideLink>
                    <ForwardArrow className="far fa-chevron-right forward-arrow"/>
                </HeadLink>
                <VideoWrapper className={videoWrapperClass}>
                  {/* Put the video here */}
                  <CourseVideo src="https://www.youtube.com/embed/b7ffmtnuSGM"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></CourseVideo>
                </VideoWrapper>
                <HeadTitle className={headTitleClass}>
                    {course.name}
                </HeadTitle>
                <HeadDes className={headDescriptionClass}>
                    {course.description}
                </HeadDes>
                <HeadCreatedBy className={headCreatedByClass}>Giảng viên<ProfileLink link href="#" className="profile-link">Jose
                    Portilla</ProfileLink>
                </HeadCreatedBy>
                <MobileBuyBtn className={mobileBtnClass}>Thêm vào giỏ hàng</MobileBuyBtn>
                <HeadButton className={headButtonsClass}>
                  <Button className={buttonsBtnClass}>Yêu thích<ButtonIcon className="far fa-heart buttons__icon"/></Button>
                  <Button className={buttonsBtnClass}>Chia sẻ<ButtonIcon className="fal fa-share buttons__icon"/></Button>
                  <Button className={buttonsBtnClass}>Tặng khóa học</Button>
                </HeadButton>
            </div>
        </HeaderWrapper>
    )
}

export default Header;