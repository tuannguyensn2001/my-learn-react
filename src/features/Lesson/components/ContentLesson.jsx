import React,{useCallback} from 'react';
import styled from 'styled-components';
import VideoLesson from "./VideoLesson";
import ContentLessonTab from "./ContentLessonTab";
import Proptypes from 'prop-types';

const ContentWrapper = styled.div`
  width: 75%;
  height: 100%;

  @media (max-width: 992px) {
    width: 100%;
  }

`

ContentLesson.propTypes = {
    url: Proptypes.string,
}

function ContentLesson({url}) {

    const renderVideoLesson = () => <VideoLesson url={url} />;



    return (
        <ContentWrapper>
            {renderVideoLesson()}
           <ContentLessonTab />
        </ContentWrapper>
    )
}

export default ContentLesson;