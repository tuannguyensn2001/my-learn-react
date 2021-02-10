import {React} from 'react';
import styled from "styled-components";
import Course from "./Common/Course";

const CourseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 100px
`

const CourseContent = styled.div`
  margin-top: 50px;
  text-align: center;
`

const Slogan = styled.div`
  color: #6b6bf3;
  font-weight: bold;
`

function CourseBanner()
{

    const renderCourse = [1,2,3,4,5,6].map(item => {
        return (
            <div key={item} className="col-md-4 col-sm-12 col-lg-4">
                <Course/>
            </div>
        )
    })

    return(
        <div className="container">
            <CourseWrapper>
                <CourseContent>
                    <Slogan>HÃY BẮT ĐẦU NGAY TỪ HÔM NAY</Slogan>
                    <h1>Khóa học nổi bật</h1>
                </CourseContent>
            </CourseWrapper>

            <div>
                <div className="row">
                    {renderCourse}

                </div>
            </div>
        </div>
    )
}


export default CourseBanner;
