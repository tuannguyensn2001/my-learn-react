import React from 'react';
import styled from 'styled-components';
import Button from "./Buttton";


const HeaderWrapper = styled.div`
  background-color: #1c1d1f;
  padding-top: 32px;
`

const Container = styled.div`
  color: #fff;
`

const GuideLink = styled.div`
  color: #b7a9e5;
  text-decoration: none;
  font-weight: 700;
`

const ForwardArrow = styled.i`
  margin: 5px 5px 0 5px;
`

const HeaderTitle = styled.div`
  text-transform: capitalize;
  font-weight: 700;
  margin-top: 8px;
  font-size: 2.3rem;
  line-height: 1.2;
`

const HeaderDescription = styled.div`
  font-size: 1.4rem;
  line-height: 1.4;
  margin: 8px 0;
  font-weight: 300;
`

const HeaderCreatedBy = styled.div`
  font-size: 1rem;
  font-weight: 300;
`

const HeadButtonWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  padding-bottom: 48px;
`

const TitleWrapper = styled.div`
  display: flex;
`



const titles = [
    {
        content: 'Frontend',
        arrow: true,
    },
    {
        content: 'Javascript',
        arrow: false,
    }
]



function Header() {

    const renderTitle = titles.map(title => {
        return(
            <TitleWrapper className={"d-flex"}>
                <GuideLink href="#" className="guide-link">{title.content}</GuideLink>
                {title.arrow && <ForwardArrow className="far fa-chevron-right forward-arrow"/>}
            </TitleWrapper>
        )
    })


    return (
        <HeaderWrapper className="head">
            <div className="row">
                <Container className="container col-xl-6 offset-xl-2 col-lg-7 col-md-9">
                    <div className="head__link d-flex">
                        {renderTitle}
                    </div>
                    <HeaderTitle className="head__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem.
                    </HeaderTitle>
                    <HeaderDescription className="head__des">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic obcaecati
                        magni repudiandae culpa voluptatum perferendis suscipit!
                    </HeaderDescription>
                    <HeaderCreatedBy className="head__created-by">Created by <a link href="#" className="profile-link">Jose
                        Portilla</a></HeaderCreatedBy>
                    <HeadButtonWrapper className="head__buttons">
                        <Button>
                            Wishlist<i className="far fa-heart buttons__icon"/>
                        </Button>
                        <Button>Share<i className="fal fa-share buttons__icon"/></Button>
                        <Button className="buttons__btn">Gift this course</Button>

                    </HeadButtonWrapper>
                </Container>
            </div>
        </HeaderWrapper>
    )
}

export default Header;