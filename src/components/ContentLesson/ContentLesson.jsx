import React,{useEffect,useCallback} from 'react';
import styled from 'styled-components';
import VideoLesson from "./VideoLesson";
import ContentLessonTab from "./ContentLessonTab";

const ContentWrapper = styled.div`
  width: 75%;
  height: 100%;

  @media (max-width: 992px) {
    width: 100%;
  }

`

function ContentLesson(props) {

    const renderVideoLesson = useCallback(() => <VideoLesson/>,[]);


    useEffect(() => {
        console.log('update');
    })

    return (
        <ContentWrapper>
            {renderVideoLesson()}
           <ContentLessonTab/>
        </ContentWrapper>
    )
}

export default ContentLesson;