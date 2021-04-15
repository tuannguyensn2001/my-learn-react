import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Playlist from "./components/Playlist";
import {useParams} from 'react-router-dom';
import ContentLesson from "./components/ContentLesson";
import {getCourseBySlug} from "../../services/courseServices";
import {getLessonBySlug} from "../../services/lessonService";
import {LessonProvider} from "./context/LessonContext";
import Layout from "../../components/Layout";

const ContentWrapper = styled.div`
  
  width: 100%;
  overflow-x: hidden;
  display: flex;
`


function LessonPage() {
    const {course, lesson} = useParams();
    const [currentLesson, setCurrentLesson] = useState({});
    const [currentCourse, setCurrentCourse] = useState({});

    useEffect(() => {
        Promise.allSettled([getLessonBySlug(course, lesson), getCourseBySlug(course)])
            .then(response => {
                const [lessonResponse, courseResponse] = response;

                handleLessonResponse(lessonResponse);

                handleCourseResponse(courseResponse);

            })

    }, [])

    const handleLessonResponse = response => {
        if (response.status !== 'fulfilled') return;

        setCurrentLesson(response.value.data.data);
    }

    const handleCourseResponse = response => {

        if (response.status !== 'fulfilled') return;

        let count = 0;
        setCurrentCourse({
            ...response.value.data,
            chapters: response.value.data.chapters.map(chapter => {
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
    }


    return (
        <Layout>


            <LessonProvider value={currentCourse}>
                <ContentWrapper>
                    <ContentLesson  url={currentLesson.video_url} />
                    <Playlist width={25}/>
                </ContentWrapper>
            </LessonProvider>

        </Layout>
    )
}

export default LessonPage;