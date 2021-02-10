import React from 'react';
import styled from 'styled-components';
import Plyr from 'plyr-react';
import "plyr-react/dist/plyr.css";



const VideoWrapper = styled.div`
    position: relative;
`


const VideoContent = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
  display: flex;
  justify-content: center;

  @media (max-width: 575.98px) {
    height: 400px;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 450px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 500px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: 550px;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    height: 700px;
  }

`

const Video = styled.div`
  height: 100%;
  width: 90%;

  @media (max-width: 575.98px) {
    width: 100%;
  }
  
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 90%;
  }
  
  
`

const PreviewLesson = styled.div`
  margin-left: 10px;
  display: none;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  
`

const PrevLesson = styled.div`
  justify-content: center;
  align-items: center;
  height: 50px;
  display: flex;
  background-color: rgba(41,48,59,.7);
  position: absolute;
  z-index: 10;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  
  &:hover{
    cursor: pointer;
  }
  
  &:hover ${PreviewLesson}{
    display: block;
  }
`

const NextLesson = styled.div`
  justify-content: center;
  align-items: center;
  height: 50px;
  display: flex;
  background-color: rgba(41,48,59,.7);
  position: absolute;
  right: 0;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  
  &:hover{
    cursor: pointer;
  }

  &:hover ${PreviewLesson}{
    display: block;
  }
`

const Icon = styled.i`
  color: #fff;
`


function VideoLesson() {

    return (
        <VideoWrapper>
            <PrevLesson>
                <Icon className="fas fa-arrow-left fa-2x"/>
                <PreviewLesson>
                    Bài học tiếp theo
                </PreviewLesson>
            </PrevLesson>
            <VideoContent>
                <Video>
                    <Plyr
                        source={{
                            type: "video",
                            sources: [
                                {
                                    src: "1G4isv_Fylg",
                                    provider: "youtube"
                                }
                            ]
                        }}
                    />
                </Video>
            </VideoContent>
            <NextLesson>
                <PreviewLesson>
                    Bài học tiếp theo
                </PreviewLesson>
                <Icon className="fas fa-arrow-right fa-2x"/>

            </NextLesson>
        </VideoWrapper>
    )
}

export default VideoLesson;