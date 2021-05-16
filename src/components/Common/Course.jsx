import {React} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const CourseItem = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 400px;
  background: #fff;
  box-shadow: 0px 10px 23px -8px rgb(0 0 0 / 11%);
  overflow: hidden;
`

const ThumbnailWrapper = styled.div`
  height: 50%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  
  
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;

  
  
  &:hover{
    transform: scale(1.2);
    transition: all .3s ease;
  }
`

const Category = styled(Link)`
  position: absolute;
  left: 20px;
  background: #4986fc;
  color: #fff;
  bottom: 0px;
  z-index: 9999;
  padding: 2px 10px;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }

`

const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
`

const Title = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
`

const Instructor = styled.div`
  text-decoration: none;
  color: #4986fc;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-weight: 500;
  
`

const Info = styled.div`
    display: flex;
  justify-content: space-between;
`

const User = styled.div`
    
`

const Price = styled.div`
  
`


Course.propTypes = {
    course: PropTypes.shape({
        slug: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        tag: PropTypes.shape({
            category: PropTypes.shape({
                name: PropTypes.string,
            })
        }),
        media: PropTypes.shape({
            source: PropTypes.string,
        })
    })
}


function Course({course}) {

    return (
        <CourseItem>
            <ThumbnailWrapper>
                <Link to={"/"}>
                    <Thumbnail src={course.media.source}/>
                </Link>
                <Category>{course?.tag?.category?.name}</Category>
            </ThumbnailWrapper>
            <ContentWrapper>
                <div>
                    <Title to={`/course/${course.slug}`}>{course.name}</Title>
                </div>
                <Instructor>
                    Giáo viên đó
                </Instructor>

                <Info>
                    <User>2300</User>
                    <Price>{course.price}</Price>
                </Info>

            </ContentWrapper>
        </CourseItem>
    )
}

export default Course;