import React from "react";
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: block;
  color: #fff;
  padding: 5px 12px;
  border: 1px solid #fff;
  margin-right: 16px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  
  &:hover{
    cursor: pointer;
  }
`

function Button(props)
{
    return(
        <ButtonWrapper className="buttons__btn">
            {props.children}
        </ButtonWrapper>
    )
}

export default Button;