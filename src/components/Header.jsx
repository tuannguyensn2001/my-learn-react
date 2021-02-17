import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Proptypes from 'prop-types';
import {useParams} from 'react-router-dom';


const HeaderWrapper = styled.div`
  z-index: 99;
  background-color: #29303b;
  height: 50px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
`

const Menu = styled.div`
  display: flex;
`

const Back = styled(Link)`
  color: white;
  height: 100%;
  display: flex;
  width: 60px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }
`

const Logo = styled(Link)`
  color: #fff;
  display: flex;
  width: 90px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`

const LogoImg = styled.img`
  height: 50%;

`

const Title = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding-left: 30px;
`

Header.propTypes = {
    name: Proptypes.string,
}

function Header({name}) {
    const {course} = useParams();

    return (
        <>
            <HeaderWrapper>
                <Menu>
                    <Back to={`/course/${course}`}><i className="fas fa-chevron-left "></i></Back>
                    <Logo to='/'><LogoImg width="100%" height="100%"
                                          src="https://fullstack.edu.vn/assets/images/f8_text_logo.png" alt=""/></Logo>
                    <Title>{name}  </Title>
                </Menu>
                <div></div>

            </HeaderWrapper>
        </>
    )
}

export default Header;