import React from 'react';
import styles from './style.module.css';
import {Link,useRouteMatch} from 'react-router-dom';
import styled from 'styled-components';
import useLocalization from "../../../../hooks/useLocalization";

const coverAllClass = styles.cover_all;
const coverClass = styles.cover;
const circleFrameClass = styles['circle-frame'];
const avatarClass = styles.avatar;
const nameClass = styles.name;
const navListClass = styles.nav__list;
const navItemClass = styles.nav__item;



const NavLink = styled(Link)`
  color: #59d4d4;
  padding: .4rem 0;
  text-align: center;

  &:hover {
    background-color: #8a92a3;
    color: #fff;
    width: 100%;
  }
`

function LeftNavBar ({LeftNavBar}) {

    const {url, path} = useRouteMatch();
    const {trans} = useLocalization();

    return (
        <div className={coverAllClass}>
            <div className={coverClass}>
                <div className={circleFrameClass}>
                    <img className={avatarClass} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Avatar"/>
                </div>
                <div className={nameClass}>Nguyễn Văn Nam</div>
            </div>

            <ul className={navListClass} >
                <NavLink to={`${path}/my-courses`} >{trans('profileLeft.myCourse')}</NavLink>
                <NavLink to={`${path}/`}>{trans('profileLeft.profile')}</NavLink>
                <NavLink to={`${path}/avatar`} >{trans('profileLeft.avatar')}</NavLink>
                <NavLink to={`${path}/account`} >{trans('profileLeft.account')}</NavLink>
            </ul>
        </div>
    )
}

export default LeftNavBar;