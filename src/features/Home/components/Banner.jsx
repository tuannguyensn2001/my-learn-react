import {React, useEffect, useState} from 'react';
import styled from "styled-components";
import useLocalization from "../../../hooks/useLocalization";

const BannerWrapper = styled.div`
  width: 100%;
  height: ${props => props.height};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  display: flex;
  justify-content: center;
  align-items: center;
`

const BannerContent = styled.div`
  font-weight: 600;
  text-align: center;
`
const BannerWelcome = styled.h2`
    color: #fff;
    text-shadow: 0 0 6px rgb(0 0 0);
    font-weight: 500;
`

const BannerTitle = styled.h1`
    color: #fff;
    text-shadow: 0 0 6px rgb(0 0 0);
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 700;
`

const BannerButtonCover = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const BannerButton = styled.button`
    all: unset;
    background-color: rgba(255 255 255 / 10%);
    border: 1px solid rgba(255 255 255 / 80%);
    color: #fff;
    padding: .8rem;
    margin-top: 2px;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 20px;
    width: 60%;

    &:focus {
        outline: none !important;
    }

    &:hover {
        text-shadow: 0 0 6px rgb(0 0 0);
        backdrop-filter: contrast(.5);
    }
`

function Banner() {
    const [height, setHeight] = useState(window.innerHeight);
    const {trans,i18n} = useLocalization();

    useEffect(() => {
        window.addEventListener('resize', event => setHeight(event.target.innerHeight))
    }, [height])



    return (
        <div>
            <BannerWrapper height={`${height - 60}px`}>
                    <div>
                        <BannerContent>
                            <BannerWelcome>{trans('banner.welcome')}</BannerWelcome>
                            <BannerTitle>{trans('banner.web_name')}</BannerTitle>
                            <BannerButtonCover>
                                <BannerButton onClick={() => i18n.changeLanguage('en')}>{trans('banner.change_language')}</BannerButton>
                                <BannerButton>{trans('banner.about')}</BannerButton>
                            </BannerButtonCover>
                        </BannerContent>
                    </div>
            </BannerWrapper>
        </div>

    )
}

export default Banner;