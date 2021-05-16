import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import './style.css';
import {useParams} from "react-router-dom";
import {getCourseBySlug} from "../../services/courseServices";
import CourseDropdown from "../../components/CourseDetail/CourseDropdown";
import Header from "./components/Header";
import Body from "./components/Body";
import BuyCourse from "./components/BuyCourse";
import Description from "./components/Description";
import Instructor from "./components/Instructor";
import WithLoading from "../../components/Loading";

function CourseDetail() {
    const [currentCourse, setCurrentCourse] = useState({});
    const {course} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let count = 0;
        getCourseBySlug(course)
            .then(response => {


                setCurrentCourse(() => {
                    return {
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
                    }
                });

                document.title = response.data.name;

            })
            .catch(err => console.log({err}))
            .finally(() => {
                setIsLoading(false);
            });
    }, [course])

    const renderRoadMap = currentCourse?.chapters?.map((chapter, index) => {
        return <CourseDropdown number={index + 1} chapter={chapter} key={chapter.id}/>
    })

    return (
        <Layout>
            <div>
                <WithLoading loading={isLoading}/>
            </div>
            <div className="container-fluid">
                {/* Header */}
                <Header course={currentCourse}/>
                {/* End header */}


                {/* Body */}

                <Body/>

            </div>
            {/* End body */}


            {/* Buy course bar */}

            <BuyCourse course={currentCourse}/>
            {/* End buy course bar */}


            <div className="row col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
                <div>
                    {renderRoadMap}
                </div>
            </div>

            {/* Description */}
            <Description content={currentCourse.description}/>
            {/* End description */}


            {/* Instructor's information */}
            <Instructor/>
            {/* End Instructor's information */}

        </Layout>
    )
}

export default CourseDetail;