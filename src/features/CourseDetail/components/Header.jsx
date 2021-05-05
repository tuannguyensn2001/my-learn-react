import React from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #1c1d1f;
  padding-top: 32px;
  color: #fff;
`

const GuideLink = styled.div`
  color: #b7a9e5;
  text-decoration: none;
  font-weight: 700;
`

const ForwardArrow = styled.i`
  padding: 0 8px;
  font-size: 0.6rem;
`

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
        <HeaderWrapper className="row head">
            <div className="container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
                <div className="head__link">
                    <GuideLink href="#" className="guide-link">Lorem, ipsum dolor.</GuideLink>
                    <ForwardArrow className="far fa-chevron-right forward-arrow"/>
                </div>
                <HeadTitle className="head__title">
                    {course.name}
                </HeadTitle>
                <HeadDes className="head__des">
                    {course.description}
                </HeadDes>
                <HeadCreatedBy className="head__created-by">Created by <ProfileLink link href="#" className="profile-link">Jose
                    Portilla</ProfileLink>
                </HeadCreatedBy>
                <HeadButton className="head__buttons">
                    <a href="#">
                        <Button className="buttons__btn">Wishlist<ButtonIcon className="far fa-heart buttons__icon"/></Button>
                    </a>
                    <a href="#">
                        <Button className="buttons__btn">Share<ButtonIcon className="fal fa-share buttons__icon"/></Button>
                    </a>
                    <a href="#">
                        <Button className="buttons__btn">Gift this course</Button>
                    </a>
                </HeadButton>
            </div>
        </HeaderWrapper>
    )
}

export default Header;