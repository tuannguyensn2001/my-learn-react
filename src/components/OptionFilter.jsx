import React from 'react';
import styled from 'styled-components';
import {Checkbox} from "antd";

const Option = styled.div`
  margin-top: 30px;
  background-color: #fff;
  box-shadow: 0px 10px 23px -8px rgb(0 0 0 / 11%);
  padding: 1.5rem;
  width: 100%;
`

const OptionCheckbox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


function OptionFilter(props) {
    const change = (event) => {
        console.log(event);
    }

    const checkbox = [1,2,3,4,5,6].map(item => {
        return(
            <Checkbox
                value={item}
                style={{marginLeft:0}}
                key={item}
                onChange={props.changeOption}
            >{item}</Checkbox>
        )
    })




    return (
        <Option>
            <h6>Chủ đề</h6>
            <OptionCheckbox>
                {checkbox}

            </OptionCheckbox>

        </Option>
    )
}

export default OptionFilter;