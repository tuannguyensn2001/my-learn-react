import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";

const ClassroomWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-top: 10px;

  &:hover {
    background-color: #f0f2f5;
    cursor: pointer;
  }

`

const ClassroomContent = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const ClassroomItemLeft = styled.div`
  display: flex;
  flex-direction: column;
`

const ClassroomItemName = styled.div`
  font-size: 20px;
  font-weight: 500;
`

const ClassroomItemCode = styled.div`

`


function ClassroomItem({classroom}) {

    const history = useHistory();

    const handleClick = () => {
        history.push(`/classroom/${classroom.code}`)
    }

    return (
        <ClassroomWrapper onClick={handleClick}>
            <ClassroomContent>

                <ClassroomItemLeft>
                    <ClassroomItemName>
                        {classroom.name}
                    </ClassroomItemName>

                    <ClassroomItemCode>
                        {classroom.code}
                    </ClassroomItemCode>
                </ClassroomItemLeft>


            </ClassroomContent>

        </ClassroomWrapper>
    )
}


ClassroomItem.propTypes = {
    classroom: PropTypes.shape({
        name: PropTypes.string,
    })

}

export default ClassroomItem;