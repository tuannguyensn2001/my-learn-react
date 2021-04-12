import {React,useEffect,useState} from 'react';
import styled from "styled-components";
import Course from "../../../components/Common/Course";
import {getCourses} from "../../../services/courseServices";
import useCourse from "../../../hooks/useCourse";

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
    // const [courses,setCourses] = useState([]);
    //
    // useEffect(() => {
    //     console.log('call api');
    //    getCourses()
    //        .then(response => {
    //            console.log(response);
    //        })
    //        .catch(err => console.log(err));
    // },[])

    const {courses,setCourses} = useCourse();

    const renderCourse = courses.map(course => {
        return (
            <div key={course.id} className="col-md-4 col-sm-12 col-lg-4">
                <Course course={course}/>
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
