import {React,useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Checkbox} from 'antd';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

const PlaylistItemWrapper = styled.div`

`

const Chapter = styled.div`
  padding: 8px 16px;
  background-color: #f7f8fa;
  border: 1px solid #dedfe0;
  transition: all ease-in-out .3s;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #edeff1;
    cursor: pointer;
  }
`

const ChapterName = styled.div`
  font-size: 15px;
  font-weight: 600;
`

const ChapterProgress = styled.div`
  font-size: 12px;
`

const LessonList = styled.div`
  padding-left: 5px;
  margin-bottom: 0;
  height: 100%;
  display: flex;
  background-color: #fff;
  &:hover{
    background-color: #f1f1f1;
  }
`

const Lesson = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  height: 100%;
  width: 100%;
  margin-left: 10px;
  
  &:hover{
    color: black;
  }
  
`

const LessonTime = styled.div`
    font-size: 12px;
`

PlaylistItem.propTypes = {
    chapter: PropTypes.shape({
        lessons: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            order: PropTypes.number,
        }))
    }),
    number: PropTypes.number,
}

function PlaylistItem({number,chapter}) {
    const {course} = useParams();

    const [isOpened,setIsOpened] = useState(false);

    const openLesson =  () => {
        setIsOpened(!isOpened);
    }

    const renderLesson = () => {
        if (!isOpened) return;

        return(
          chapter.lessons.map(lesson => {
              return(
                  <LessonList key={lesson.id} >
                      <Checkbox/>
                      <Lesson to={`/course/${course}/learn/${lesson.slug}`}>
                          <div>{lesson.order}. {lesson.name}</div>
                          <LessonTime><i className="fas fa-play-circle"></i>  12:30 </LessonTime>
                      </Lesson>
                  </LessonList>
              )
          })
        )
    }

    const renderIcon = () => {
        if (isOpened) {
            return(
                <div>
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </div>
            )
        }

        return(
            <div>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
        )
    }

    return (
        <PlaylistItemWrapper>
            <Chapter onClick={openLesson}>
                <div>
                    <ChapterName>
                        Phần {number}: {chapter.name}
                    </ChapterName>
                    <ChapterProgress>
                        2/2 | 1:03:45
                    </ChapterProgress>
                </div>
                {renderIcon()}

            </Chapter>
            {renderLesson()}

        </PlaylistItemWrapper>
    )
}

export default PlaylistItem;