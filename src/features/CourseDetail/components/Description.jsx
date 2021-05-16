import React, {useState} from "react";
import Layout from "../../../components/Layout";
import styled from "styled-components";


const DescriptionCover = styled.div`
  max-height: ${props => props.isOpen ? '100%' : '200px' };
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    //background: linear-gradient(transparent 150px, white);
    background: ${props => !props.isOpen ? 'linear-gradient(transparent 150px, white)' : 'unset' };
  }
`

const DescriptionDefault = styled.div`
  margin-top: 32px;
`
const DescriptionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
`

const ReadMore = styled.button`
  all: unset;
  margin-top: 16px;
  color: #5624d0;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  
  &:hover{
    color: #401b9c;
  }
  
  &:focus{
    outline: none;
  }
`
export default ({content}) => {

    const [isOpen,setIsOpen] = useState(false);



    const handleOnClick = () => {
        setIsOpen(() => {
            return !isOpen;
        })
    }

    const render = () => {
        if (isOpen){
            return(
                <div>
                    Show less
                    <i className="fal fa-caret-up"/>
                </div>
            )
        }

        return(
            <div>
                Read more
                <i className="fal fa-caret-down"/>
            </div>
        )
    }

    return (
        <DescriptionDefault className="description container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
            <DescriptionCover isOpen={isOpen} className="description__cover">
                <DescriptionTitle className="description__title">Description</DescriptionTitle>
                {content}
            </DescriptionCover>

            {/*<ReadMore onClick={handleOnClick} className="read-more">*/}
            {/*    {render()}*/}
            {/*</ReadMore>*/}

        </DescriptionDefault>
    )
}