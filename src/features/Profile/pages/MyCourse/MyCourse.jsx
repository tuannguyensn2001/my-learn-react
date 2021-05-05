import React from 'react';
import {Card} from "antd";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';

export default function MyCourse() {
    const courses = useSelector(state => state?.auth?.user?.courses) || [];

    return (
        <div className={'row'}>
            {courses.map(course => {
                return (
                    <div className={'col-md-3'}>
                        <Link to={`/course/${course.slug}`}>
                            <Card
                                hoverable
                                cover={<img src={`${course?.media?.source}`}
                                            alt={course.name} height={'180px'}/>}
                            >
                                <p>{course.tag.name}</p>
                                <h4>{course.name}</h4>
                                <h5>{course.description}</h5>
                            </Card>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}