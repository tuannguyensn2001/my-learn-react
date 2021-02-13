import {React} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CourseItem = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 400px;
  background: #fff;
  box-shadow: 0px 10px 23px -8px rgb(0 0 0 / 11%);
`

const ThumbnailWrapper = styled.div`
  height: 50%;
  position: relative;
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`

const Category = styled(Link)`
  position: absolute;
  left: 20px;
  background: #4986fc;
  color: #fff;
  bottom: -10px;
  z-index: 1;
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


function Course() {
    return (
        <CourseItem>
            <ThumbnailWrapper>
                <Link>
                    <Thumbnail src="https://webextrasite.com/teamplate/image/18d6b1a31f.jpg"/>
                </Link>
                <Category>Công nghệ thông tin</Category>
            </ThumbnailWrapper>
            <ContentWrapper>
                <div>
                    <Title>Design for web with adobe Photoshop</Title>
                </div>
                <Instructor>
                    TUẤN NHOKVIP
                </Instructor>

                <Info>
                    <User>2300</User>
                    <Price>1000000</Price>

                </Info>


            </ContentWrapper>
        </CourseItem>
    )
}

export default Course;