import React from 'react';
import Header from "../../components/Header";
import styled from 'styled-components';
import Playlist from "../../components/Playlist";

const ContentWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  overflow-x: hidden;
`


function LessonPage() {
    return (
        <div>
            <Header/>

            <ContentWrapper>
              <div>
                  <div className="row">
                      <div className="col-lg-9">
                          main
                      </div>
                      <div className="col-lg-3">
                          <Playlist/>
                      </div>
                  </div>
              </div>
            </ContentWrapper>

        </div>
    )
}

export default LessonPage;