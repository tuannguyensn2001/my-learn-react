import React, {useEffect,useState} from 'react';
import Layout from "../../components/Layout";
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {getCourseBySlug} from "../../services/courseServices";
import Playlist from "../../features/Lesson/components/Playlist";
import CourseDropdown from "../../components/CourseDetail/CourseDropdown";


const CourseDetailWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: row;
`

const Preview = styled.div`
  width: 30%;
  height: 400px;
  top: 80px;
  position: sticky;

`



const Content = styled.div`
  width: 70%;
`

const Title = styled.div`
`
const Name = styled.h1`
`

const Description = styled.div`
  font-size: 15px;
`

const CourseContent = styled.div`
  margin-top: 35px;
`
const CourseContentTitle = styled.h4`
    
`

const CourseContentWillLearn = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const CourseContentWillLearnContent = styled.div`
    width: 50%;
    font-size: 14px;
`

const CourseContentWillLearnContentIcon = styled.div`
  color: blue;
  margin-right: 8px;
`
const CourseRoadmap = styled.div`
  
`


function CourseDetails() {
    const [currentCourse,setCurrentCourse] = useState({});
    const {course} = useParams();

    useEffect(() => {
        let count = 0;
       getCourseBySlug(course)
           .then(response => {
               setCurrentCourse({
                   ...response.data,
                   chapters: response.data.chapters.map(chapter => {
                       return {
                           ...chapter,
                           lessons: chapter.lessons.map(lesson => {
                               return {
                                   ...lesson,
                                   order: ++count,
                               }
                           })
                       }
                   })
               });
           })
           .catch(err => console.log({err}));
    }, [course])

    const filterContent = (contents,type) => {
        return contents.find(content => content.name === type);
    }

    const renderWillLearnContent = () => {
        let contents = currentCourse.contents;

        if (!contents) return;

        contents = filterContent(contents,'will-learn');

        return contents.contents.map(content => {
            return (<CourseContentWillLearnContent key={content.id}>
                <CourseContentWillLearnContentIcon className="fas fa-check"/>{content.name}
            </CourseContentWillLearnContent>)
        })

    }

    const renderRoadMap = currentCourse?.chapters?.map((chapter,index) => {
        return <CourseDropdown number={index+1} chapter={chapter} key={chapter.id} />
    })







    return (
        <Layout>
            <div className="container">
                <CourseDetailWrapper>
                    <Content>
                        <Title>
                            <Name>
                                {currentCourse.name}
                            </Name>

                            <Description>
                                {currentCourse.description}
                            </Description>
                        </Title>

                        <CourseContent>
                            <CourseContentTitle>
                                Bạn sẽ học được gì
                            </CourseContentTitle>
                            <CourseContentWillLearn>
                                {renderWillLearnContent()}
                            </CourseContentWillLearn>

                            <CourseRoadmap>
                                {renderRoadMap}
                            </CourseRoadmap>
                        </CourseContent>


                    </Content>

                    <Preview>

                    </Preview>
                </CourseDetailWrapper>
            </div>
        </Layout>
    )
}

export default CourseDetails;