import {React, useEffect, useState} from 'react';
import styled from "styled-components";

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
  color: #fffcfc;
  font-weight: 600;
  text-align: center;
`

function Banner() {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', event => setHeight(event.target.innerHeight))
    }, [height])

    return (
        <div>
            <BannerWrapper height={`${height - 60}px`}>
                    <div>
                        <BannerContent>
                            <h4>Chào mừng đến với MyLearn !</h4>
                            <h1>Nền tảng học trực tuyến</h1>
                            <div>
                                <button className="btn btn-success">Khóa học</button>
                                <button className="btn btn-success">Về chúng tôi</button>
                            </div>
                        </BannerContent>
                    </div>
            </BannerWrapper>
        </div>
    )
}

export default Banner;