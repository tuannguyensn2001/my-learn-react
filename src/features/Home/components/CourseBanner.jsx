import {React,useEffect,useState} from 'react';
import styled from "styled-components";
import Course from "../../../components/Common/Course";
import {getCourses} from "../../../services/courseServices";
import useCourse from "../../../hooks/useCourse";
import useLocalization from '../../../hooks/useLocalization';


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
  text-transform: uppercase;
`

const Title = styled.h1`
    font-weight: 600;
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

    const {trans} = useLocalization();

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
                    <Slogan>{trans('courseBanner.slogan')}</Slogan>
                    <Title>{trans('courseBanner.title')}</Title>
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
