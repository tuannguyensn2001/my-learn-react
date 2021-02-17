import React,{useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as PropTypes from "prop-types";
import {useRouteMatch} from 'react-router-dom';

const CourseDropdownItemWrapper = styled.div`
  padding: 0 16px 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(0,0,0,.05);
  background-color: #fcfcfc;
  height: 48px;
`

const Lesson = styled(Link)`
  color: #333;
`

CourseDropdownItem.propTypes = {
    lesson: PropTypes.shape({
        slug: PropTypes.string,
        name: PropTypes.string,
        order: PropTypes.number,
    })
}

function CourseDropdownItem({lesson}) {

    const {url} = useRouteMatch();


    return (
        <CourseDropdownItemWrapper>
            <Lesson to={`${url}/learn/${lesson.slug}`} >
                {lesson.order}. {lesson.name}
            </Lesson>

        </CourseDropdownItemWrapper>
    )
}

export default CourseDropdownItem;