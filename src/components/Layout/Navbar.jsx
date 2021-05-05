import {React, useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import Avatar from "./Avatar";


const Nav = styled.nav`
  width: 100%;
  background-color: black;
  position: fixed;
  height: 60px;
  z-index: 99;
`

const Menu = styled.ul`

`


const IconToggle = styled.i`
  margin-top: 5px;
  color: white;
`

const NavItemLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`

const Logo = styled(Link)`
  width: 10%;
  height: 100%;
`

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`

const AvatarWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`


function Navbar() {
    const [menu] = useState({
        category: [
            {
                path: '/',
                title: 'Trang chủ'
            },
            {
                path: '/courses',
                title: 'Khóa học'
            }
        ],
        auth: [
            {
                path: '/auth/login',
                title: 'Đăng nhập'
            },
            {
                path: '/auth/register',
                title: 'Đăng ký'
            }
        ]
    });

    const authUser = useSelector(state => state.auth);
    const courseList = useSelector(state => state.cart.courseList);


    useEffect(() => {
        console.log('authUser', authUser)
    }, [authUser]);

    useEffect(() => {
        console.log('courseList', courseList)
    }, [courseList]);


    const listItemMenuCategory = menu.category.map(item => {
        return (
            <li key={item.path} className="nav-item">
                <NavItemLink className="nav-link active" aria-current="page" to={item.path}>{item.title}</NavItemLink>
            </li>
        )
    })

    const listItemMenuAuth = useCallback(() => {
        const {isLoggedIn, user} = authUser;

        if (!isLoggedIn) {
            return menu.auth.map(item => {
                return (
                    <li key={item.path} className="nav-item">
                        <NavItemLink className="nav-link active" aria-current="page"
                                     to={item.path}>{item.title}</NavItemLink>
                    </li>
                )
            })
        }

        return (
            <Avatar courseList={courseList}/>
        )
    },[authUser])


    return (
        <Nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">
                <Logo className="navbar-brand" to='/'><LogoImg
                    src="https://fullstack.edu.vn/assets/images/f8_text_logo.png" alt=""/></Logo>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><IconToggle className="fas fa-bars"></IconToggle></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Menu className="navbar-nav me-auto ml-20 mb-2 mb-lg-0">
                        {listItemMenuCategory}
                    </Menu>
                    <Menu className="navbar-nav  ">
                        {listItemMenuAuth()}
                    </Menu>

                </div>
            </div>
        </Nav>
    )
}

export default Navbar;