import React from 'react';
import styled from 'styled-components';
import VideoLesson from "./VideoLesson";

const ContentWrapper = styled.div`
  width: 75%;
  height: 100%;
  
  @media (max-width: 992px){
    width: 100%;
  }
  
`

function ContentLesson(props) {
    return (
           <ContentWrapper>
               <VideoLesson/>
           </ContentWrapper>
    )
}

export default ContentLesson;