import React,{useState} from 'react';
import CourseDropdownItem from "./CourseDropdownItem";
import styled from 'styled-components';
import PropTypes from 'prop-types'
import Course from "../Common/Course";
import useLocalization from '../../hooks/useLocalization';

const CourseDropdownWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
 
 
`

const CourseDropdownContent = styled.div`
  background-color: #f4f4f4;
  padding: 12px 25px 12px 45px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid rgba(240, 81, 35, .15);

  &:hover {
    cursor: pointer;
  }
`

const CourseDropdownTitle = styled.div`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  display: flex;
  font-weight: 500;
  font-size: 18px;
`
const CourseDropdownIcon = styled.i`
  color: blue;
  margin-right: 10px;
`

const CourseDropdownLesson = styled.div`

`

CourseDropdown.propTypes = {
    chapter: PropTypes.shape({
        name: PropTypes.string,
        lessons: PropTypes.array,
    }),
    number: PropTypes.number,
}


function CourseDropdown({chapter,number}) {

    const {trans} = useLocalization();
    const [isOpened,setIsOpened] = useState(false);



    const renderCourseItem = chapter.lessons.map(lesson => {
        return <CourseDropdownItem lesson={lesson} key={lesson.id}/>
    })

    const renderItem = isOpened ? renderCourseItem : null;

    const renderIcon = isOpened ? "fas fa-minus" : "fas fa-plus";

    return (
        <CourseDropdownWrapper>
            <CourseDropdownContent onClick={() => setIsOpened(prev => !prev)}>
                <CourseDropdownTitle>
                    <CourseDropdownIcon className={renderIcon}/>
                    <div>{trans('courseDropDown.chapter')} {number}: {chapter.name}</div>
                </CourseDropdownTitle>
                <CourseDropdownLesson>
                    bla bla bla
                </CourseDropdownLesson>
            </CourseDropdownContent>
            {renderItem}
        </CourseDropdownWrapper>
    )
}

export default CourseDropdown;