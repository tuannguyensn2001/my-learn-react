import React from 'react';
import Header from "../../components/Header";
import styled from 'styled-components';
import Playlist from "../../components/Playlist";
import ContentLesson from "../../components/ContentLesson";

const ContentWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  overflow-x: hidden;
  display: flex;
`


function LessonPage() {
    return (
        <div>
            <Header/>

            <ContentWrapper>
                <ContentLesson/>
                <Playlist/>


            </ContentWrapper>

        </div>
    )
}

export default LessonPage;